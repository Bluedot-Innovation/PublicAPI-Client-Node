/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
var fenceData =
{
    "security": {
        "apiKey" : '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483',
        "customerApiKey": '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483'
    },
    "content": {
        "zone": {
            "zoneName": "starbucks",
            "minimumRetriggerTime": "00:01",
            "timeActive": {
                "from": {
                    "time": "0:00",
                    "period": "am"
                },
                "to": {
                    "time": "12:00",
                    "period": "pm"
                }
            }
        }
    }
};

var options = {
    uri: 'https://api.bluedotinnovation.com/1/zones',
    method: 'POST',
    json: fenceData
};

request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);