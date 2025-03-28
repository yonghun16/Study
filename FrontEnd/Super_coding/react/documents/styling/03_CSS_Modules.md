## CSS Modules

### CSS Modules
- CSS Modules는 CSS의 범위를 컴포넌트 단위로 제한하여 전역 네임스페이스 오염을 방지하는 방식입니다. React에서 CSS Modules을 사용하면, 각 컴포넌트에서만 스타일이 적용되도록 할 수 있습니다.
```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
```

### 동적 클래스 적용
```jsx
import styles from './Button.module.css';

function Button({ primary }) {
  return (
    <button className={primary ? styles.primary : styles.secondary}>
      Click Me
    </button>
  );
}
```
