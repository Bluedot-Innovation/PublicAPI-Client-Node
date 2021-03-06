/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Get Applications client demonstrates listing all your applications from Bluedot backend 
 * using 'request' node module. 
 */

var request = require('request');
var bdCustomerApiKey = "86577370-7b91-11e4-bcb7-a0481cdc3311"; //This key is generated by Bluedot Point Access UI when your account is created.
var options = {
    uri: 'https://api.bluedotinnovation.com/1/applications?customerApiKey=' + bdCustomerApiKey,
    method: 'GET'
};
request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        var result = response.body;
        if( typeof result !== 'string' ) {
            console.log("Error in response");
            return;
            result = JSON.stringify(result)
        }
        console.log(result);
    }
);
