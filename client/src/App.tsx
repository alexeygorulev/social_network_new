import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';
import { someFunc } from './store';

function App() {
  const count = useSelector((state: RootState) => state.someReducer);
  const dispatch = useDispatch();

  return (
    <div className="div">
      <button onClick={() => dispatch(someFunc('lel'))}>kek</button>
      {count.kek}
    </div>
  );
}

export default App;
