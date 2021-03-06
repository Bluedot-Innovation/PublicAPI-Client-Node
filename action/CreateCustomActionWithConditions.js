/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Create Custom Action with Conditions client demonstrates adding a custom action with conditions to an existing zone 
 * using the 'request' node module.
 */
var request = require('request');
var actionData =
    {
        "security": {
        	/* The apiKey is generated when you create an application. */
            "apiKey" : "c2c8211f-796f-4eda-b6ce-05467b5263a9",
            /* This key is generated by Bluedot Point Access UI when your account is created. It is also available
             * on the PointAccess interface in the Edit Profile section. */        
            "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
        },
        "content": {
            "zone": {
            	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET Zones API */
                "zoneId": "722c991a-3ebb-4143-b441-5b0c0cf680a0",
                "actions": {
                    "customActions": [
                        {
                            "name": "My Custom Application action",
                            "conditions": {
	                            "percentageCrossed": [
	                                {
	                                    "percentage": 45,
	                                    /* Time in Hour:Minute format.*/
	                                    "timeoutPeriod": "00:01",
	                                    /*When sequential is set true, the action will be triggered based on the 
	                                     * sequence in which of geofences, geolines or beacons are passed.*/
	                                    "sequential": true
	                                }
	                            ],
	                            "dateRange": [
	                                {
	                                    "start": "12/12/2014",
	                                    "end": "14/12/2014"
	                                }
	                            ],
	                            "timeActive": [
	                                {
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
	                                }
	                            ],
	                            "bearing": [
	                                {
	                                    "fromAngle": 80,
	                                    "toAngle": 200
	                                }
	                            ],
	                            "speed": [
	                                {
	                                    "minimumSpeed": 10,
	                                    "maximumSpeed": 30
	                                }
	                            ]
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
    json: actionData
};
request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);