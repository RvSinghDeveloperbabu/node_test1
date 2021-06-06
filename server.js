const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
  var user_name = req.body.name
  var email = req.body.email
  var password = req.body.password
  var confirm_password = req.body.confirm_password

  console.log(user_name, email, password, confirm_password);
})

app.listen(port, () => {
  console.log(`Express app listining at http://localhost:${port}`)
})