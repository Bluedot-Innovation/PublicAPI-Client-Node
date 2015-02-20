/**
 * Created by Arun on 16/09/2014.
 * Copyright : Bluedot Innovations.
 *
 */

var request = require('request');
var customerApiKey = "86577370-7b91-11e4-bcb7-a0481cdc3311";
request.get ( 'https://api.bluedotinnovation.com/1/applications?customerApiKey='+customerApiKey,
    function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);
