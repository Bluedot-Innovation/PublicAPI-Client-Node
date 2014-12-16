/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
    var fenceData =
        {
            security: {
                apiKey : 'eeaed830-7c2e-4175-969a-70ea53e1845e',
                customerApiKey: '86577370-7b91-11e4-bcb7-a0481cdc3311'
            },
            content: {
                zone: {
                    zoneId: '6059bd44-578b-4db6-ae0b-b54721355de2',
                    "actions": {
                        "vibrationActions": [
                            {
                                name : 'My Application actions1',
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
                                            "time": "2:00",
                                            "period": "pm"
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