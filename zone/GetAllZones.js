/**
 * Created by Balendran on 24/10/2014.
 * Get a list of zones by Api Key or Customer API key
 */


var request  = require('request');


var  apiKey         = '066ce100-2677-11e4-9331-bc305bf60831';
var  customerApiKey = '50e40a61-79d3-11e4-b239-a0481cdba483';

request.get ( 'https://api.bluedotinnovation.com/1/zones?customerApiKey=' +customerApiKey+ '&apiKey=' + apiKey + "&pageNumber=0",
    function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);
