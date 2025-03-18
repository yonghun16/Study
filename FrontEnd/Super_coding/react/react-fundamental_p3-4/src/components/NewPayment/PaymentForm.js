import React, { useState } from 'react';

import './PaymentForm.css';

const PaymentForm = () => {
  const [objectStage, setObjectStage] = useState({
    name: ' ',
    price: 0,
    today: null
  });
  //const [name, setName] = useState(' ');
  //const [price, setPrice] = useState(0);
  //const [today, setToday] = useState(null);

  const inputTypeTextChangeHandler = (event) => {
    setObjectStage(prevState => ({
      ...prevState,
      name: event.target.value
    }));
  };
  const inputTypeNumberChangeHandler = (event) => {
    setObjectStage(prevState => ({
      ...prevState,
      price: event.target.value
    }));
  };
  const inputTypeDateChangeHandler = (event) => {
    setObjectStage(prevState => ({
      ...prevState,
      today: event.target.value
    }));
  };
  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    console.log('name', objectStage.name);
    console.log('price', objectStage.price);
    console.log('today', objectStage.today);
  };

  return (
    <form>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label>이름</label>
          <input
            type='text'
            value={objectStage.name}
            onChange={inputTypeTextChangeHandler}
          />
        </div>
        <div className='new-payment__control'>
          <label>금액</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={objectStage.price}
            onChange={inputTypeNumberChangeHandler}
          />
        </div>
        <div className='new-payment__control'>
          <label>날짜</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            value={objectStage.today}
            onChange={inputTypeDateChangeHandler}
          />
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type='button' onClick={buttonSubmitHandler}>결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
