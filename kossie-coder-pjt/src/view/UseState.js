//import React from 'react';
// import {Fragment} from 'react';
import {useState} from 'react';
function UseState() {
  //State가 변경되고 나서 랜더링이 되는 과정은 모든 State의 변경이 이뤄지고
  //한번에 일괄적으로 이루어진다.(state의 상태값이 바뀔때마다 즉각적으로 랜더링하는 과정이 비효율적)
  //따라서 변경된 State변수값을 곧바로 사용하고 싶을 경우
  //변수 하나를 따로 생성하고 이를 통해 제어해야함.(그러나 비효율적)
  //동일한 useState를 중복해서 사용해도 랜더링한번에 한번만 적용된다.
  //그렇기에 사용되는 것이 prevState다.
  //setState로 미리 변경된 상태값을 바로 가져와서 변경될 state에 적용시키는 개념.
  //엄밀히는 이전 상태값을 불러와서 변경된 상태값으로 덮어쒸우는 개념.
  console.log('render');
  const [number, setNumber] = useState(1);
  const [number1, setNumber1] = useState(1);
  const double = () => {
    // const doubledNumber = number*2;
    // setNumber(doubledNumber);
    // setNumber(number * 2);
    // setNumber(number * 2);
    // setNumber1(number1*2);
    // console.log(doubledNumber);
    // console.log(number1);
    setNumber((prevState)=> prevState * 2);
    setNumber((number)=>{
      return number * 2;
    });
  };

  return(
    <>
      <div>{number}</div>
      <div>{number1}</div>
      <button onClick={double}>Submit</button>
    </>
  );
}
export default UseState;