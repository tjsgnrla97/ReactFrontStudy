//import React from 'react';
// import {Fragment} from 'react';
function App() {
  const number = 1;
  const double = (number) => {
    return number * 2;
  };

  return(
    // <React.Fragment>
    // <Fragment>
    <>
      <div>{double(number)}</div>
      <button>Submit</button>
    </>
    // </Fragment>
    // </React.Fragment>
  );
}
export default App;