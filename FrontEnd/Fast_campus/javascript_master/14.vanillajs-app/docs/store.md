# 스토어(상태 관리)

### 1. store의 개념
#### 1. store의 정의
- SPA(Single Page Application)에서 store는 애플리케이션의 전역 **상태(state)를 관리하는 저장소**를 의미. 
- 컴포넌트 간에 **데이터를 공유**하거나, 여러 컴포넌트가 동일한 데이터를 참조하거나 갱신해야 할 때, store를 사용하면 상태 관리를 깔끔하고 일관성 있게 할 수 있음.

#### 2. 왜 store를 사용하는가?
- SPA에서는 여러 컴포넌트들이 서로 독립적으로 동작하지만, 어떤 데이터는 공통적으로 필요.
- 예를 들면:
  - 로그인한 유저 정보
  - 장바구니 목록
  - 다크모드/라이트모드 설정
- 이런 데이터를 각각의 컴포넌트에서 관리하면 중복이나 비일관성 문제가 생기기 쉬움. 
- 그래서 공통된 데이터를 한 곳에 모아서 관리할 필요가 있는데, 그걸 store가 해줌.

#### 3. store의 주요 역할
- 전역 상태 보관: 앱 전반에서 공유되는 데이터를 보관
- 반응성 유지: 상태가 바뀌면 자동으로 관련된 컴포넌트가 리렌더링됨
- 일관된 상태 흐름: 상태 변경을 추적하고 디버깅하기 쉬움


### 2. Store 구현
- TextField 컴포넌트 입력 내용을 Message 컴포넌트, Title 컴포넌트에 출력
#### 1. core/Store
```js
// core/core.js
///// Store /////
export class Store {
  constructor(state) {                     // 외부에서 객체(state)를 받아옴.
    this.state = {}
    this.observers = {}
    for (const key in state) {             // state 속성인 key를 반복
      Object.defineProperty(this.state, key, {   // store.state의 속성을 정의하는 척하고, 외부state val 변환
        get: () => state[key],
        set: (val) => {                    // store.state.set(val)가 실행되면
          state[key] = val;                          // 1) ⭐️ store.state.set(val) => 외부state.key = val
          if (Array.isArray(this.observers[key])) {  // 호출할 콜백이 있는 경우!
            this.observers[key].forEach(observer => observer(val))  //  2) this.observers[key]는 배열이고 subscribe에서 [cb1, cb2, cb3, ...]으로 받아 실행
          }                                                         //     실행하는 메소드는 subscribe에 등록한 render() 등
        }
      })
    }
  }

  // state가 어떻게 변하는지 구독(subscribe)을 통해서 감시하겠다.
  // subscribe(key, cb)                    // cb에 render()함수를 전달 한다는 뜻은.
                                           // store.state.set(val)가 실행될 때마다(즉 store에 새로운 값이 넣을 때마다)
                                           // subscribe에서 observers의 key에 등록한 render() 함수를 실행하겠다
  subscribe(key, cb) {
    // {message: [cb1, cb2, cb3, ...]}
    Array.isArray(this.observers[key])     // this.observers[key]가 배열이면
      ? this.observers[key].push(cb)       // 위 배열에 cb 추가
      : this.observers[key] = [cb]         // this.observers[key]에 배열 만들어서 cb 추가
                                           // {[cb1, cb2, cb3, ...]}
                                           // this.observers[key]의 초기 값은 undefined이기에 처음에는 배열 만들어서 cb 추가함.
  }
}

```

#### 2. store/message.js (스토어의 데이터)
```js
// store/message.js
import { Store } from '../core/Core.js'

export default new Store(
  {
    message: 'Hello~'
  }
)
```

#### 3. 컴포넌트1(TextField.js)
```js
// components/TextField.js
import { Component } from '../core/Core'
import messageStore from '../store/message'

export default class TextField extends Component {
  render() {
    this.el.innerHTML = `
      <input value="${messageStore.state.message}" />  <!-- getter 실행 -->
    `
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      messageStore.state.message = inputEl.value     // store.state.set(inputEl.value) 실행, 
                                                     //inputEl.value를 messageStore의 state.message로 전달
    })
  }
}
```

#### 4. 컴포넌트2(Message.js)
```js
// components/Message.js
import { Component } from "../core/Core";
import messageStore from "../store/message";        // messageStore는 /store/message.js안에서 new Store()로 정의했기 때문에
                                                    // Store 클래스 인스턴스임

export default class Message extends Component {
  constructor() {
    super()
    messageStore.subscribe('message', () => {       // 그래서 messageStore.subscribe() 사용가능
      this.render()                                 // subscribe의 callback함수로 this.render 전달하여 실행
    })
  }
  render() {
    this.el.innerHTML = `
      <h2>${messageStore.state.message}</h2>
    `
  }
}
```

#### 5. 컴포넌트3(Title.js)
```js

import { Component } from "../core/Core"
import messageStore from "../store/message"

export default class Title extends Component {
  constructor(){
    super({
      tagName: 'h1'
    })
    messageStore.subscribe('message', newVal => {
      console.log(newVal)
      this.render()
    })
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`
  }
}
```
