/**
 * Created by Bluedot Team
 * Get a list of checkins
 */
var request             = require('request');
var simpleCheckIn       = '24d9a245-2087-421b-9972-2af2ee0970f1';
var customerApiKey      = "86577370-7b91-11e4-bcb7-a0481cdc3311";
var applicationApiKey   = "86577370-7b91-11e4-bcb7-a0481cdc3311";
var startDate           = "11/9/2014";
var endDate             = "14/9/2014";

//Increment the page number to get the next 100
//Example with Date
request.get ( 'https://api.bluedotinnovation.com/1/checkinactivities?simpleCheckInZoneId='+simpleCheckIn+'&customerApiKey=' + customerApiKey+ "&apiKey=" + applicationApiKey + "&startdate="+startDate + "&enddate="+ endDate+ "&pagenumber=0",
    function (error, response)
    {
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