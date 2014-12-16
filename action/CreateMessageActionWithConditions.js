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
                    "zoneId": 'a040db81-e541-48f5-9ca4-7c5ac7ddbe44',
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