/**
 * Created by Arun on 16/09/2014.
 * Copyright : Bluedot Innovations.
 *
 */

var request = require('request');
var customerApiKey = "50ddefe2-79d3-11e4-b239-a0481cdba483";
request.get ( 'https://api.bluedotinnovation.com/1/application/getAll?customerApiKey='+customerApiKey,
    function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);
