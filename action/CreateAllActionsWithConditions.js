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
                    "zoneId": '40126395-7228-4b57-a720-1784859bb5c3',
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
                        ],
                        "customActions": [
                            {
                                "name" : 'A custom action',
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
                        ],
                        "vibrationActions": [
                            {
                                "name" : 'A Vibration Action',
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
                        ],
                        "messageActions": [
                            {
                                "name" : "A Message Action with Conditions",
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
                                            "time": "2:00",
                                            "period": "pm"
                                        }
                                    }]
                                }
                            }
                        ],
                        "urlActions": [
                            {
                                "name" : 'A URL Action to open Bluedot web site',
                                "url" : 'http://wwww.bluedotinnovation.com',
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