/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Get Applications client demonstrates an application for a given apiKey from Bluedot backend 
 * using 'request' node module. 
 */

var request = require('request');
var bdCustomerApiKey = "86577370-7b91-11e4-bcb7-a0481cdc3311"; //This key is generated by Bluedot Access UI when you register
var bdApplicationApiKey = "a4e5b264-d231-436b-b30e-4065bd517f02"; //This key is generated by Bluedot Access UI when you register.
var options = {
    uri: 'https://api.bluedotinnovation.com/1/applications?customerApiKey=' + bdCustomerApiKey + '&apiKey=' + bdApplicationApiKey,
    method: 'GET'
};
request ( options,
    function (error, response, body) {
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