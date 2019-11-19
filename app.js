const express = require('express');
const bodyParser = require('body-parser');//Body형태
//라이브러리 받아오기
const app = express();
//create express app

//require('dotenv').config();

//parse request of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))

//parse requests of content-type -application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//connection to the database
mongoose.connect("mongodb+srv://wlgusdn:wl850930.@wlgusdn-lclhr.mongodb.net/WebProject?retryWrites=true&w=majority", {  useUnifiedTopology: true  ,useNewUrlParser: true});
//mongodb+srv://wlgusdn:<password>@wlgusdn-lclhr.mongodb.net/test?retryWrites=true&w=majority 
//내 DB의 URI

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we are connection");
});//connect

var Account = require('./models/Account');//스키마를 가져옴
var router = require('./routes/accounts')(app,Account); // 앱과 스키마를 가지고 라우트를 돌림
var test = require('./models/test');//스키마를 가져옴
var trouter = require('./routes/tests')(app,test); // 앱과 스키마를 가지고 라우트를 돌림
//Rountes는 메소드 느낌

// define a simple route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});//포트 3000으로 서버를 연다

