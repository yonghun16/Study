import { useState, useEffect } from 'react';
import useCounter from './hooks/useCounter';
import Card from './UI/Card/Card';


const BackwardCounter = () => {
  const counter = useCounter(false);
  console.log(counter);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
