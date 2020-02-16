import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
const[first, setFirst] = useState(null);
const[second, setSecond] = useState(null);
const[result, setResult] = useState(0);

const onSubmit = (e)=>{
  e.preventDefault();

  if(first === null || second === null)  {    
    return;   
  }
  
  setResult('waiting for api responce');
  
  fetch('https://localhost:543/distance?f=abc&s=def')
        .then(res => res.json())
        .then((data) => {
          localStorage.setItem('result', data); // saving in local storage
          setResult(data['editDistance'])
        })
        .catch(console.log)
}
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
        <label>First Input</label>
        <input type="text"  name="first" value={first} onChange={(e)=> setFirst(e.target.value)}></input>
        <label>Second Input</label>
        <input type="text" name="second" value={second} onChange={(e)=> setSecond(e.target.value)}></input>
        <label>Result</label>
        <input type="text" name="result" value={result}></input>
        <input type="submit" onClick={(e)=>{
          if(first === null || second === null)
          {
            alert('please fill the both input');
          }         
          
        }} name="second" value="Submit"></input>
        </form>
        
         
      </header>
    </div>
  );
}

export default App;
