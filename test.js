var axios = require('axios');
var data = JSON.stringify({"username":"anhvu1","password":"123456"});

var config = {
  method: 'post',
  url: 'http://localhost:8900/account/signin/',
  headers: { 
    // 'Authorization': 'Basic ', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});