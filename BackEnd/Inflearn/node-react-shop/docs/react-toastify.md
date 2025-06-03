# react-toastify

```bash
npm install react-toastify
```

- 물론입니다! **react-toastify**는 React 앱에서 사용자에게 메시지를 간편하고 아름답게 표시할 수 있도록 도와주는 알림(Toast) 라이브러리입니다. 설치와 사용이 간단하면서도 커스터마이징이 자유로워 많이 사용됩니다.


## 🚀 기본 사용법
### 1. ToastContainer 설정 (보통 App 컴포넌트 안에)
```jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("안녕하세요! Toast입니다.");

  return (
    <div>
      <button onClick={notify}>토스트 띄우기</button>
      <ToastContainer />
    </div>
  );
}
```

### 2. ⚙️ 주요 옵션들
#### ✅ toast() 함수 옵션 예시
```jsx
toast("메시지", {
  position: "top-right",       // 위치
  autoClose: 3000,             // 자동 닫힘 시간 (ms)
  hideProgressBar: false,      // 진행바 숨김 여부
  closeOnClick: true,          // 클릭 시 닫힘
  pauseOnHover: true,          // 마우스 올리면 멈춤
  draggable: true,             // 드래그 가능
  theme: "light",              // light, dark, colored
});
```

#### ✅ 위치 옵션
- top-left
- top-right
- top-center
- bottom-left
- bottom-right
- bottom-center


### 3.🎨 커스터마이징
- CSS로 직접 스타일링하거나 styled-components도 가능.


### 4. 📦 React-Toastify 유용한 기능 정리

| 기능               | 설명                                      | 사용 예                                                  |
|--------------------|-------------------------------------------|-----------------------------------------------------------|
| `toast.success()`   | 성공 알림을 표시                          | `toast.success("저장 성공!")`                             |
| `toast.error()`     | 오류 알림을 표시                          | `toast.error("에러가 발생했습니다")`                      |
| `toast.info()`      | 정보성 메시지 표시                        | `toast.info("잠시 후 다시 시도해주세요")`                |
| `toast.warn()`      | 경고 메시지 표시                          | `toast.warn("주의가 필요합니다")`                        |
| `toast.loading()`   | 로딩 상태 표시                            | `toast.loading("업로드 중...")`                          |
| `toast.update()`    | 기존 토스트 메시지를 갱신                 | `toast.update(id, { render: "완료!", type: "success" })` |
| `toast.dismiss()`   | 특정 또는 모든 토스트 제거                | `toast.dismiss(id)` 또는 `toast.dismiss()`               |
| `toast.isActive()`  | 특정 토스트가 표시 중인지 확인            | `toast.isActive(id)`                                     |
| 커스텀 컴포넌트     | JSX로 알림 표시 가능                      | `toast(<MyCustomToastComponent />)`                      |
| Promise Toast       | 프로미스 상태에 따라 알림 자동 업데이트  | `toast.promise(promiseFn, { pending, success, error })`  |
