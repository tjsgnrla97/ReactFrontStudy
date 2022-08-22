import React from "react";
import Hello from "./Hello";
import './App.css';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <Wrapper>
      <Hello />
      <Hello />
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      /*중괄호로 감싸지 않으면 화면에 보입니다.*/
      {/* 주석은 이런 형태로 해야함 */}
      <Hello name="react" color="red" isSpecial={true}
      //isSpecial true default로 생략 가능
      />
      <Hello color="pink"/>
      <Counter/>
      <InputSample/>
    </Wrapper>
  );
}

export default App;
