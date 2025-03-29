## Custom Hook 2


### 사용예제 2
- 1. 초기 데이터 로드
  - App이 렌더링되면 useEffect 실행 → fetchTasks 실행 → Firebase에서 데이터 가져오기
  - transformTasks 함수가 데이터를 변환하여 tasks 상태 업데이트
- 2. 새로운 할 일 추가
  - NewTask에서 새로운 할 일 추가 시 taskAddHandler 실행
  - 기존 tasks 배열에 새로운 task를 추가
- 3. 할 일 목록 표시
  - Tasks 컴포넌트에서 tasks 상태를 화면에 렌더링
- 4. 재로드 기능
  - Tasks에서 “다시 불러오기” 버튼을 누르면 fetchTasks가 실행되어 데이터를 다시 가져옴

```JSX
/* useHttp.js */
import React, { useState } from 'react';

const useHttp = (requestConfig, applyData) => {
// - requestConfig: HTTP 요청의 설정 정보(예: URL, method, headers, body 등)를 받음
// - applyData: 요청이 성공한 후 데이터를 처리하는 함수

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // isLoading: 요청이 진행 중인지 나타냄 (true이면 로딩 중)
  // error: 요청이 실패하면 오류 메시지를 저장

  const sendRequest = async () => {
    // sendRequest 함수가 실행되면 HTTP 요청을 보냄

    setIsLoading(true);
    setError(null);
    // 요청을 시작할 때 isLoading을 true로 설정
	// 오류가 있을 수도 있으니 error를 초기화

    try {
      const response = await fetch(
        requestConfig.url, {
          method: requestConfig?.method ? requestConfig.method : 'GET',
          headers: requestConfig?.headers ? requestConfig.headers : {},
          body: requestConfig?.body ? JSON.stringify(requestConfig.body) : null
      });
      // fetch를 이용해 HTTP 요청을 보냄
      // method, headers, body는 사용자가 설정한 값이 있으면 사용하고, 없으면 기본값을 사용

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      // 응답이 실패했다면(response.ok === false) 오류를 발생시킴

      const data = await response.json(); 
      applyData(data);
      // 요청이 성공하면 응답 데이터를 applyData 함수에 전달하여 처리

    } catch (err) {
      setError(err.message || 'Something went wrong!');
      // 요청이 실패하면 error 상태를 업데이트
    }
    setIsLoading(false);
    // 요청이 끝났으므로 isLoading을 false로 설정
  };

  return { 
    isLoading,
    error,
    sendRequest
  };
};

export default useHttp;
```

```JSX
/* useHttp.js */
import React, { useEffect, useState } from 'react';
import useHttp from './Hooks/useHttp';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  // tasks: 할 일 목록을 저장하는 상태
  // setTasks: 할 일 목록을 업데이트하는 함수

  const transformTasks = (taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }
  // Firebase에서 데이터를 받아오면 객체 형태 ({ id1: { text: 'task1' }, id2: { text: 'task2' } })
  // 이를 배열 형태 ([{ id: 'id1', text: 'task1' }, { id: 'id2', text: 'task2' }])로 변환하여 setTasks로 업데이트

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(
    { 
      url: 'https://react-test-41f35-default-rtdb.asia-southeast1.firebasedatabase.app//tasks.json'
    }, 
    transformTasks
  );
  // useHttp 훅을 사용하여 Firebase에서 데이터를 가져오는 fetchTasks 함수를 생성
  // transformTasks 함수는 받아온 데이터를 tasks 상태로 변환하는 역할

  useEffect(() => {
    fetchTasks();
  }, []);
  // 컴포넌트가 처음 렌더링될 때([] dependency) fetchTasks 실행 → Firebase에서 데이터 가져오기

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
 // 새로운 할 일이 추가되면 기존 tasks 상태에 새로운 task를 추가

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
```
