/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
    var fenceData =
        {
            security: {
                apiKey : '5a71ce9b-c92d-44fa-9990-c6ecbdc56066',
                customerApiKey: '564ecdc0-7e86-11e4-95ff-a0481cdba483'
            },
            content: {
                zone: {
                    zoneId: 'a040db81-e541-48f5-9ca4-7c5ac7ddbe44',
                    "actions": {
                        "messageActions": [
                            {
                                "name" : "A Message Action",
                                "title" : "Welcome to Bluedot Innovation",
                                "message" : "Welcome to Bluedot Innovation Offices",
                                "conditions": {
                                    "percentageCrossed":
                                        [
                                            {
                                                "percentage": 45,
                                                "timeoutPeriod": "00:01"
                                            }
                                        ],
                                    "dateRange": [
                                        {
                                            "start": "12/12/2014",
                                            "end": "14/12/2014"
                                        }
                                    ],
                                    "timeActive": [{
                                        "from": {
                                            "time": "10:00",
                                            "period": "am"
                                        },
                                        "to": {
                                            "time": "11:00",
                                            "period": "am"
                                        }
                                    }]
                                }
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