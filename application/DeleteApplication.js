var request = require('request');
 
var customerApiKey = "6ab02370-97c4-11e4-b3f3-00155d53317c";
var applicationId = "29d0571f-cfb3-459f-a346-6e11a351ad31";
 
var options = {
    uri: "https://api.bluedotinnovation.com/1/applications?customerApiKey="+customerApiKey+"&applicationId=" + applicationId,
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