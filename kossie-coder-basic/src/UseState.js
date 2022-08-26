import React, {useState} from "react";

function UseState() {
  const [text, setText] = useState('Kossie');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    //alert('submitted');
    event.preventDefault();
    console.log(username, password);
  };
  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      onSubmit();
    }
  };

  //let text = 'Kossie';

  const updateText = () => {
    //text = 'Coder';
    setText('Coder');
    console.log(text+'updateText');
  }
  console.log(text+'beforeReturn');
  return (
    <div className="App">
      <input onKeyUp={onKeyUp}/>
      <button onClick={onSubmit}>Submit</button>
      <br/>
      <br/>
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="Username" 
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}/><br/>
        <input 
          placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button type="Submit">Login</button>
      </form>
    </div>
  );
}

export default UseState;
