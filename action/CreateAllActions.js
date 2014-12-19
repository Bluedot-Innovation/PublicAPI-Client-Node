/**
 * 
 * Copyright : Bluedot Innovations.
 */
var request = require('request');
    var fenceData =
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
                    "zoneId": "722c991a-3ebb-4143-b441-5b0c0cf680a0",
                    "actions": {
                        "customActions": [
                            {
                                "name": "A Custom Application action"
                            }
                        ],
                        "soundActions": [
                            {
                                "name": "A Sound action"
                            }
                        ],
                        "vibrationActions": [
                            {
                                "name": "A Vibration action"
                            }
                        ],
                        "urlActions": [
                            {
                                "name": "BluedotURL",
                                "url": "http://www.bluedotinnovation.com"
                            }
                        ],
                        "messageActions": [
                            {
                                "name": "Welcome to Bluedot Innovation",
                                "title": "Welcome to Bluedot InnovationMessage",
                                "message": "Welcometo Bluedot Innovation."
                            }
                        ]
                    }
                }
            }
        };
var options = {
    uri: 'https://api.bluedotinnovation.com/1/actions',
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