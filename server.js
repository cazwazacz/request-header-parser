var express = require('express')
var app = express()
app.enable('trust proxy')

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/whoami', function (req, res) {
  //res.send('Hello World!')
  var ip = req.ip
  var language = req.headers['accept-language'].split(",")[0];
  var software = req.headers['user-agent'].split("(")[1].split(")")[0]
  var obj = {
    ipaddress: ip,
    language: language,
    software: software
  };

  res.json(obj);
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Request-header-parser listening on port ' + port + '!')
})
