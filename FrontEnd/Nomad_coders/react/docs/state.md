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
            <label htmlFor="minutes">Minutes</label>
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

### 단위 변환기2
```jsx
    // 자식 컴포넌트
    const MinutesToHours = () => {
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
            <label htmlFor="minutes">Minutes</label>
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

    // 자식 컴포넌트
    const KmToMiles = () => {
      return (
        <div>
          <h3>Km to Miles</h3>
          <label htmlFor="km">Km</label>
          <input id="km" type="number" />
          <label htmlFor="miles">Miles</label>
          <input id="miles" type="number" />
        </div>
      );
    }

    // 부모 컴포넌트
    const App = () => {
      const [index, setIndex] = React.useState("xx");
      const onSelect = (event) => {
        setIndex(event.target.value);
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <select value={index} onChange={onSelect}>
            <option value="xx">Select your units</option>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Miles</option>
          </select>
          <hr />
          {index === "0" ? <MinutesToHours /> : null}
          {index === "1" ? <KmToMiles /> : null}
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```
