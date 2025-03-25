import "./App.css";
import { useState } from "react";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
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

	return (
		<>
			<PaymentForm getPaymentFormData={getPaymentFormData}/>
			<Expenses items={expenses} />
		</>
	);
}

export default App;
