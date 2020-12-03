const express = require('express');
const app = express();
require('dotenv').config(); //Required to access .env files

//__dirname returns the directory that the currently executing script is in
//Thus, the resulting path is: ./root/web/index.html
//Ref: https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
app.use(express.static(__dirname+'/web'));

app.get('/', function(req,res){
  console.log('Main page loading...');
  
  if (error) {
    throw error
  }
  response.sendFile(__dirname + '/client/public/index.html');
});

app.get("/server/testGet", testResp)
async function testResp (request, response) {
  console.log('Request for data received by Express backend');
  response.status(200).json("String sent by Express backend");
}

//Put this last among all routes. Otherwise, it will return HTML to all fetch requests and trip up CORS. They interrupt each other
// For any request that doesn't match, this sends the index.html file from the client. This is used for all of our React code.
//Eliminates need to set redirect in package.json at start script with concurrently
app.get('*', (req, res) => {  
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

//App will run on process.env.PORT by default. Must specify or Heroku uses its default port
//It runs on port 4000 only if process.env.PORT is not defined
app.listen(process.env.PORT || 4000, function () {
  if(process.env.PORT !== undefined){
    console.log(`App running on process.env.PORT ${process.env.PORT}`);
  } else {
    console.log(`App running on PORT 4000`);
  }
});