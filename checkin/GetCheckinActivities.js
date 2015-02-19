var request             = require('request');
var simpleCheckIn       = '24d9a245-2087-421b-9972-2af2ee0970f1';
var customerApiKey      = '846bced3-5049-11e4-8e8e-a0481cdc3311';
var startDate           = "11/9/2014";
var endDate             = "14/9/2014";

//Increment the page number to get the next 100
//Example with Date
request.get ( 'https://api.bluedotinnovation.com/1/checkinactivity/get?simpleCheckInZoneId='+simpleCheckIn+'&customerApiKey=' + customerApiKey+ "&startdate="+startDate + "&enddate="+ endDate+ "&pagenumber=0",
    function (error, response)
    {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);