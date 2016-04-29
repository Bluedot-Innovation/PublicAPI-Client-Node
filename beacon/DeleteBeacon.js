var request = require('request');
 
var customerApiKey = "6ab02370-97c4-11e4-b3f3-00155d53317c";
var applicationApiKey    = "d66d4f5d-7c09-4bd1-8549-48893f121";
var beaconId = "29d0571f-cfb3-459f-a346-6e11a351ad31";
 
var options = {
    uri: "https://api.bluedotinnovation.com/1/beacons?customerApiKey="+customerApiKey+"&apiKey="+applicationApiKey+"&beaconId=" + beaconId,
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