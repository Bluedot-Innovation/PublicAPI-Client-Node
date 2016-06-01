/**
 * Copyright : Bluedot Innovations.
 */
var request = require('request');
//JSON for a Zone which is active for a certain time period during the day. Time values have a format of HH:MM and the period value has to be one of {am/pm}
var zoneTimeActiveData =
{
    "security": {
        "apiKey" : "c2c8211f-796f-4eda-b6ce-05467b5263a9",
        /*
         customerApiKey is generated when customer registers first time. It is also available
         on the PointAccess interface in the Edit Profile section.
         */        
        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
    },
    "content": {
        "zone": {
            "zoneName": "starbucks",
            "minimumRetriggerTime": "00:01",
            "enableCheckOut": false,
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
//JSON for a Zone which is active all day.
var zoneActiveAllDayData =
{
    "security": {
        "apiKey" : "c2c8211f-796f-4eda-b6ce-05467b5263a9",
        /*
         customerApiKey is generated when customer registers first time. It is also available
         on the PointAccess interface in the Edit Profile section.
         */        
        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
    },
    "content": {
        "zone": {
            "zoneName": "starbucks",
            "minimumRetriggerTime": "00:01",
            "enableCheckOut": false,
            "activeAllDay": ture
        }
    }
};

var options = {
    uri: 'https://api.bluedotinnovation.com/1/zones',
    method: 'POST',
    json: zoneTimeActiveData
};

request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);