import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };

  return (
    <div>
      <div>
        <Hello name="react" color="red" />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
        <br />
        <Wrapper>
          <Hello color="pink" />
          <Hello name="react" color="red" isSpecial />
        </Wrapper>
      </div>
      <div>안녕히 계세요</div>
      <br />
      <Counter />
      <InputSample />
      <UserList />
    </div>
  );
}

export default App;
