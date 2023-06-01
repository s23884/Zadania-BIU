import React from 'react';
import { useLocation } from 'react-router-dom';

const Add = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const x = parseInt(searchParams.get('x'));
  const y = parseInt(searchParams.get('y'));
  const result = isNaN(x) || isNaN(y) ? 'Invalid arguments' : x + y;

  return (
    <div>
      <h2>Add</h2>
      <p>{isNaN(result) ? result : `${x} + ${y} = ${result}`}</p>
    </div>
  );
};

export default Add;
