var request = require('request');
 
var customerApiKey = "6ab02370-97c4-11e4-b3f3-00155d53317c";
var applicationApiKey    = "d66d4f5d-7c09-4bd1-8549-48893f121";
var zoneId = "e8ed5a00-705c-409a-8c1e-9e4f7c70bbd6";
 
var options = {
    uri: "https://api.bluedotinnovation.com/1/zones?customerApiKey="+customerApiKey+"&apiKey="+applicationApiKey+"&zoneId=" + zoneId,
    method: "DELETE"
};
 
request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);