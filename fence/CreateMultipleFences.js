/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Create Multiple fence client demonstrates adding fences of various shapes in a single JSON request to an existing zone 
 * using 'request' node module.
 */
var request = require('request');    
var multipleFenceData =
    {
        "security": {
        	/* The apiKey is generated when you create an application. */
            "apiKey": "386dc374-0a57-47f3-beb7-5862cade8a31",
            /* The customerApiKey is generated when customer registers first time. It is also available
             * on the PointAccess interface in the Edit Profile section. */ 
            "customerApiKey": "7cd1ea80-d40e-11e4-84cb-b8ca3a6b879d"
        },
        "content": {
            "zone": {
            	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET zones API */
                "zoneId": "95b8285d-f85d-48d1-9c4d-b2e7f12ec6bf",
                "fences": {
                    "circles": [
                        {
                            "name": "Test Circular fence with 8M radius",
                            "color": "#000fff",
                            "radius": 8,
                            "center": {
                                "latitude": "-37.8159544565362",
                                "longitude": "144.9723565578461"
                            }
                        },
                        {
                            "name": "Test Circular fence with 16M radius",
                            "color": "#fff234",
                            "radius": 16,
                            "center": {
                                "latitude": "-37.8164587537386",
                                "longitude": "144.978997707366"
                            }
                        }
                    ],
                    "rectangles": [
                        {
                            "name": "A bounding box with north east and south west",
                            "color": "#3559ef",
                            "northEast": {
                                "latitude": "-37.81544591805361",
                                "longitude": "144.9786114692688"
                            },
                            "southWest": {
                                "latitude": "-37.81758175613945",
                                "longitude": "144.9731397628784"
                            }
                        }
                    ],
                    "polygons": [
                        {
                            "name": "A Polygonal Fence",
                            "color": "#000fff",
                            "vertices": [
                                {
                                    "latitude": "-37.818717",
                                    "longitude": "144.983085"
                                },
                                {
                                    "latitude": "-37.81954",
                                    "longitude": "144.982125"
                                },
                                {
                                    "latitude": "-37.820298",
                                    "longitude": "144.985178"
                                },
                                {
                                    "latitude": "-37.820468",
                                    "longitude": "144.984228"
                                },
                                {
                                    "latitude": "-37.818887",
                                    "longitude": "144.982587"
                                }
                            ]
                        }
                    ],
                    "polylines": [
                        {
                            "name": "PolyLine Around MCG",
                            "color": "#000fff",
                            "vertices": [
                                {
                                    "latitude": -37.818717,
                                    "longitude": 144.983085
                                },
                                {
                                    "latitude": -37.81954,
                                    "longitude": 144.982125
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
 
var options = {
    uri: 'https://api.bluedotinnovation.com/1/fences',
    method: 'POST',
    json: multipleFenceData 
};
 
var beforeDate = new Date();
request(options,
    function (error, response) {
        var afterDate = new Date();
        console.log(JSON.stringify(response.body));
    }
);