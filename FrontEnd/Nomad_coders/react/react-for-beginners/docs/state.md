# state (단위 변환기)

### 단위 변환기
```jsx
    const App = () => {
      const [amount, setAmount] = React.useState(0);
      const [flipped, setFlipped] = React.useState(false);

      const onChange = (event) => setAmount(event.target.value);
      const reset = () => setAmount(0);
      const onFlip = () => {
        reset();
        setFlipped((current) => !current);
      };

      return (
        <div>
          <div>
            <h1 className="title">Super Converter</h1>
            <label htmlFor="amount">Minutes</label>
            <input 
              value={!flipped ? amount : Math.round(amount*60)} 
              id="minutes" 
              placeholder="Minute" 
              type="number" 
              onChange={onChange}
              disabled={flipped}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input 
              value={!flipped ? Math.round(amount/60) : amount} 
              id="hours" 
              placeholder="Hours" 
              type="number" 
              onChange={onChange}
              disabled={!flipped}
            />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>Flipped</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```
