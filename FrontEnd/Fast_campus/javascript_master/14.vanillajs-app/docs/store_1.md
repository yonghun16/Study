```js
// 예시
const originalState = { message: "hello" };
console.log(originalState.message); // 👉 hello

const store = {
  state: {},                                     // 여기서 state는 프록시 역할을 함.

  init(external_state) {                         // 외부에서 state를 받아옴.
    for (const key in external_state) {          // 외부의 state의 key를 순환
      Object.defineProperty(this.state, key, {   // Object.defineProperty()가 this.state.message를 영구적으로 설정.
                                                 // -> 설정만 init 안에서 했을 뿐,
        get: () => external_state[key],
        set: (val) => {
          external_state[key] = val;             // ⭐️ store.state.set(val) => external_state.key = val
        }
      });
    }
  }
};


store.init(originalState);
store.state.message = "world"; // [알림] message가 world로 바뀜!

console.log(originalState.message); // 👉 world

// 접근방식                       ->  실제동작                          :  예시 결과
// -------------------------------------------------------------------------------------------------
// store.state.message            ->  external_state.message을 읽음     :  "hello"
// store.state.message = "world"  ->  external_state.message = "world"  :  실제 데이터가 바뀜
```
