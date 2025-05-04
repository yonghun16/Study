# props styled

```jsx
// App.js
import Button from './Button';
import styles from "./App.module.css";    // CSS 파일 import

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!</h1>  // 적용
      <Button text="Log out" />
    </div>
  );
}

export default App;
```
```css
.title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
}
```
