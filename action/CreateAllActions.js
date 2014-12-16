/**
 * 
 * Copyright : Bluedot Innovations.
 */
var request = require('request');
    var fenceData =
        {
            security: {
                apiKey : '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483',
                customerApiKey: '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483'
            },
            content: {
                zone: {
                    zoneId: '6de96865-f3c8-42cf-bdc2-38027272770a',
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
                                "url": "http: //www.bluedotinnovation.com"
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