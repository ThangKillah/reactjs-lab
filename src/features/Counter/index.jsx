import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

const CounterFeature = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Counter: {count}</p>
      <div>
        <Button onClick={() => dispatch(increase())} sx={{ mr: 2 }} variant="outlined">
          Increase
        </Button>
        <Button onClick={() => dispatch(decrease())} variant="outlined">
          Decrease
        </Button>
      </div>
    </div>
  );
};

export default CounterFeature;
