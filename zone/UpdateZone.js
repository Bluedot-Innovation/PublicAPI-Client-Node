/**
 * 
 * Copyright : Bluedot Innovations.
 */
var request = require('request');
var fenceData =
{
    "security": {
        "apiKey" : '6cb63bdd-c6fa-43f4-a155-a0dc0919fae0',
        /*
         customerApiKey is generated when customer registers first time. It is also available
         on the PointAccess interface in the Edit Profile section.
         */                
        "customerApiKey": '564ecdc0-7e86-11e4-95ff-a0481cdba483'
    },
    "content": {
        "zone":     {
            "zoneName": "starbucks",
            /* Time in Hour:Minute format.*/
            "minimumRetriggerTime": "00:01",
            "enableCheckOut": true,
            "timeActive": {
                "from": {
                    /* Time in Hour:Minute format.*/
                    "time": "0:00",
                    "period": "am"
                },
                "to": {
                    /* Time in Hour:Minute format.*/
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