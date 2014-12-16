var request             = require('request');
var simpleCheckInZoneId = '24d9a245-2087-421b-9972-2af2ee0970f1';
var customerApiKey      = '846bced3-5049-11e4-8e8e-a0481cdc3311';
var startDate           = "11/9/2014";
var endDate             = "14/9/2014";

//Increment the page number to get the next 100
//Example with Date
request.get ( 'https://api.bluedotinnovation.com/1/checkinactivities/get?simpleCheckInZoneId='+simpleCheckInZoneId+'&customerApiKey=' + customerApiKey+ "&startdate="+startDate + "&enddate="+ endDate+ "&pagenumber=0",
    function (error, response)
    {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);


//http://localhost:3033/api/checkinactivities/get?simpleCheckInZoneId=24d9a245-2087-421b-9972-2af2ee0970f1&customerApiKey=bc199c80-5441-11e4-b7bb-a0481cdc3311&pagenumber=1"