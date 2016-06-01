/**
 * Created by Bluedot Team on 24/10/2014.
 * Get a list of zones by Api Key or Customer API key
 */


var request  = require('request');


var  apiKey         = 'c2c8211f-796f-4eda-b6ce-05467b5263a9';
var  customerApiKey = '86577370-7b91-11e4-bcb7-a0481cdc3311';

request.get ( 'https://api.bluedotinnovation.com/1/zones?customerApiKey=' +customerApiKey+ '&apiKey=' + apiKey + "&pageNumber=0",
    function (error, response) {
        if (error) {
            console.log(error);
        }
        var result = response.body;
        if( typeof result !== 'string' ) {
            console.log("WTF");
            return;
            result = JSON.stringify(result)
        }
        console.log(result);
    }
);
