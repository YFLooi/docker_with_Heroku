import React from "react";
import logo from './logo.svg';
import './App.css';

function App(props) {
  const queryExpress = () => {
    fetch("/server/testGet", {method: "GET"})
      //Here we chain 2 promise functions: The first fetches data (response), the second examines text in response (data)
      .then(async function(response){
        const data = await response.json();
        document.getElementById("message").innerHTML = data.toString();
      })
  }
  const clearMessage = () => {
    document.getElementById("message").innerHTML = "";
  }

  return(
    <div className="App">
      <h1>Express GET request example</h1>
      <button onClick={() => {queryExpress();}}>Make GET request</button>
      <button onClick={() => {clearMessage();}}>Clear message </button>
      <div id="message"></div>
    </div>
  );
}

export default App;
