## 동적인 스타일링


### inline 스타일링
```jsx
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>목표</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{  // inline 스타일링
            backgroundColor: isValid ? "transparent" : "salmon",
            borderColor: isValid ? "#ccc" : "red",
          }}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
```

### CSS 클래스를 사용한 스타일링
```jsx
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}> {/* CSS 클래스를 사용한 스타일링*/}
        <label>목표</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
```
