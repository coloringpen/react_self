import React, { useState, useRef } from 'react';
// import Hello from './Hello';
// import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';

import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem',
  // };

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]); // users를 쓰는 곳은 다 이렇게 바꿔라!
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      {/* <div>
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
      <InputSample /> */}
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </>
    </div>
  );
}

export default App;
