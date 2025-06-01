# clsx


### ✅ 기본사용 
```jsx
import clsx from 'clsx'

const buttonClass = clsx(
  'w-full',
  'px-4 py-2',
  isActive && 'bg-blue-500',
  !isActive && 'bg-gray-300'
)

return <button className={buttonClass}>버튼</button>
```


### ⚙️ 유용한 패턴
#### 1. 조건에 따라 클래스 조합
```jsx
import clsx from 'clsx';

const Button = ({ isPrimary, isDisabled }) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded',
        isPrimary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black',
        isDisabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      버튼
    </button>
  );
};
```
#### 2. 조건과 키-값 스타일
```jsx
// 예제 2-1

clsx({
  'bg-red-500': error,
  'bg-green-500': success,
  'text-white': true,
})
```

```jsx
// 예제 2-2
const Badge = ({ type }) => {
  return (
    <span
      className={clsx(
        'text-xs font-semibold px-2.5 py-0.5 rounded',
        {
          'bg-green-100 text-green-800': type === 'success',
          'bg-red-100 text-red-800': type === 'error',
          'bg-yellow-100 text-yellow-800': type === 'warning',
        }
      )}
    >
      {type}
    </span>
  );
};
```

#### 3. Array와 Object 혼합
```jsx
const cardClass = clsx(
  'p-4 shadow',
  ['bg-white', 'text-gray-900'],
  { 'hover:shadow-lg': true }
);
```


### 📌 요약
| 목적                 | 사용 방식 예시                                                |
|----------------------|---------------------------------------------------------------|
| 기본 클래스 조합     | `clsx('text-white', 'bg-black')`                              |
| 조건부 Tailwind 조합 | `clsx(isDark && 'bg-gray-800')`                               |
| 여러 조건 조합       | `clsx({ 'bg-red-500': hasError, 'bg-green-500': isSuccess })` |
| 배열/객체 혼합       | `clsx('base', ['mt-2'], { hidden: !visible })`                |
