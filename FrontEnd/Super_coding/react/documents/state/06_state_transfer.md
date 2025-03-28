## State Transfer
- 자식 컴포넌트에서 부모 컴포넌트로 상태 올리기
- 자식 컴포넌트에서 작성한 form state를 부모 컴포넌트로 올리기
- 미션 : 부모 컴포넌트 console.log()에서 자식 컴포넌트 form data를 찍어보기!

### 부모 컴포넌트의 '함수'를 자식 컴포넌트에게 전달
- props로 함수 내리기, state로 상태 올리기
```jsx
// 부모 컴포넌트
  const getPaymentFormData = (data) => {
    console.log(data);
  }

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData}/>
    </>
  );

// 자식 컴포넌트
const PaymentForm = ({getPaymentFormData}) => {   // props로 함수를 자식에서 받아서
    getPaymentFormData(objectState);              // objectState를 부모에게로 전달
}
```
- 그러나 props형태로 자식에서 부모에게 전달하는 건 불가능하다. 
- 때문에 props로 함수를 자식에게 넘겨주고, 자식은 부모에게 state를 올려주는 방법을 쓴다.

### 부모 컴포넌트의 상태를 자식 컴포넌트에게 전달
- 자식에게 받은 state를 부모의 state로 업데이트
```jsx
// 부모 컴포넌트
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
  ])

  const getPaymentFormData = (data) => {
    console.log(data);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(2025, 8, 14),
      },
    ])
  }
```

### 요약
- 자식 컴포넌트의 상태를 부모 컴포넌트로 올리고 싶다면, 
- 부모 컴포넌트에서 함수를 만들어서 pros를 통해 전달해줘야 한다.

- 부모 컴포넌트에서 업데이트 된 상태를 다른 자식 컴포넌트로 전달해 주어
- UI가 자동으로 업데이트 되어 변화를 반영할 수 있게 한다. 

