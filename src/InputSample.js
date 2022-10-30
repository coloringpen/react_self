import React, { useState, useRef } from 'react';

function InputSample() {
  /** 상태 관리의 시작 */
  const [result, setResult] = useState(0);
  /* const [name, setName] = useState(0);
  const [nickname, setNickname] = useState(0); */

  const resultMaker = (e) => {
    const inputValue = e.target.value;
    setResult((prevValue) => (prevValue = inputValue));
  };

  const reset = () => {
    setResult('');
  };

  /** 상태를 여러개 관리하기 */
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs; // 이건 단순한 객체 카피 아닐까,,? 이렇게 아예 추출이 되는건가?
  // 가리키는 것이 같아진다는 것으로 일단 이해해두자

  const setValues = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target; // target의 속성들 즉 정보들이 곧 프로퍼티화 된다는 것을 기억하기
    const valueTemplate = { ...inputs, [name]: value }; // 기존의 inputs 객체 복사한 뒤, name키를 가진 값을 value로 설정

    // setInputs(valueTemplate);
    setInputs((prev) => (prev = valueTemplate));
  };

  /* const nameMaker = (e) => {
    const nameValue = e.target.value;
    setName((preName) => (preName = nameValue));
  };

  const nicknameMaker = (e) => {
    const nicknameValue = e.target.value;
    setNickname((preNickname) => (preNickname = nicknameValue));
  }; */
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });

    nameInput.current.focus();
  };

  return (
    <div>
      <input onChange={resultMaker} value={result} />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값: {result}</b>
      </div>
      <input
        /* onChange={nameMaker} */ onChange={setValues}
        placeholder="이름"
        name="name"
        /* value='' 이렇게 되면,, 이 상태가 계속 고정되려 하고 입력값이 계속 리셋되죠,,*/
        value={name}
        ref={nameInput}
      />
      <input
        /* onChange={nicknameMaker} */ onChange={setValues}
        placeholder="닉네임"
        name="nickname"
        value={nickname}
      />
      <button /*onClick={reset}*/ onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
