/**
 * 
 * Copyright : Bluedot Innovations.

 */
var request = require('request');
    var fenceData =
        {
            "security": {
                "apiKey" : '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483',
                /*
                 customerApiKey is generated when customer registers first time. It is also available
                 on the PointAccess interface in the Edit Profile section.
                 */                
                "customerApiKey": '4d3a1b60-4dc4-11e4-ad0a-a0481cdba483'
            },
            "content": {
                "zone": {
                    "zoneId": '6059bd44-578b-4db6-ae0b-b54721355de2',
                    "actions": {
                        "soundActions": [
                            {
                                "name" : 'A Sound Action',
                                "conditions": {
                                    "percentageCrossed":
                                        [
                                            {
                                                "percentage": 45,
                                                /* Time in Hour:Minute format.*/
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
                                            /* Time in Hour:Minute format.*/
                                            "time": "10:00",
                                            "period": "am"
                                        },
                                        "to": {
                                            /* Time in Hour:Minute format.*/
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