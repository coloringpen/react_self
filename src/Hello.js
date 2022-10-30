import React from 'react';

function Hello(
  /*props*/ { color, name, isSpecial } /* 필요한 것만 뽑아쓸 수 있음 */
) {
  // const special = isSpecial ? <b>*</b> : null; 이렇게 해두고 {special}를 리턴할 자리에 배치
  return (
    <div style={{ /*color: props.color*/ color }}>
      {/* {special} */}
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>*</b>}
      안녕하세요 {/*props.name*/ name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
