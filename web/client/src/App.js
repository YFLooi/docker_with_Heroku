import './App.css';

function App(props) {
  const queryExpress = () => {
    fetch("/server/testResp/", {method: "GET"})
      .then(async function(response){
        const data = await response.json();
        console.log(data);
        document.getElementById("message").innerHTML = data;
    })  
    .catch(function(error){
        console.log("Request failed", error)
    })
  }
  const clearMessage = () => {
    document.getElementById("message").innerHTML = "";
  }

  return(
    <div className="App">
      <h1>Express GET request example</h1>
      <div>with heroku.yml</div>
      <button onClick={() => {queryExpress();}}>Make GET request</button>
      <button onClick={() => {clearMessage();}}>Clear message </button>
      <div id="message"></div>
    </div>
  );
}

export default App;
