var request = require('request');
 
var customerApiKey = "6ab02370-97c4-11e4-b3f3-00155d53317c";
var applicationApiKey    = "d66d4f5d-7c09-4bd1-8549-48893f121";
var zoneId = "4f134aaa-3382-49bb-b7c7-a0bf72e56238";
var fenceId = "916988ef-f0c1-45b8-a719-6dc4b401025e";
 
var options = {
    uri: "https://api.bluedotinnovation.com/1/fences?customerApiKey="+customerApiKey+"&apiKey="+applicationApiKey+"&zoneId=" + zoneId + "&fenceId=" + fenceId,
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