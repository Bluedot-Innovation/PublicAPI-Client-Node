/**
 * Created by Bluedot Team on 16/09/2014.
 * Copyright : Bluedot Innovations.
 *
 */

var request = require('request');
var customerApiKey = "86577370-7b91-11e4-bcb7-a0481cdc3311";
var options = {
    uri: 'https://api.bluedotinnovation.com/1/applications?customerApiKey='+customerApiKey,
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
