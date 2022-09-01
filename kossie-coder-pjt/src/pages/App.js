//import React from 'react';
// import {Fragment} from 'react';
function App() {
  const number = 1;
  const double = (number) => {
    return number * 2;
  };
  const printHello = () => {
    console.log('hello')
  };

  return(
    //맨처음 div 태그 감싸는거 생략하고 싶을때
    // <React.Fragment>
    // <Fragment>
    <>
      <div>{double(number)}</div>
      <button onClick={printHello}>Submit</button>
    </>
    // </Fragment>
    // </React.Fragment>
  );
}
export default App;