/**
* @author Bluedot Innovation
* Copyright (c) 2016 Bluedot Innovation. All rights reserved.
* Update fence client demonstrates updating existing geofences within a zone using 'request' node module.
* Circular fence
* Bounding Box
* Polygonal
* Geoline
*/
var request = require('request');
var fenceData =
{
    "security": {
    	/* The apiKey is generated when you create an application. */
        "apiKey" : "c2c8211f-796f-4eda-b6ce-05467b5263a9",
        /* The customerApiKey is generated when customer registers first time. It is also available
         * on the PointAccess interface in the Edit Profile section. */                 
        "customerApiKey": "86577370-7b91-11e4-bcb7-a0481cdc3311"
    },
    "content": {
        "zone": {
        	/* The zoneId is the id of the zone being updated. This can be fetched by calling GET zones API */
            "zoneId": 'b80c81af-7bb8-4c85-9340-b816da5a0ca5',
            "fences": {
                "rectangles": [
                    {
                    	/* This is the id of the rectangular fence being updated. This can be fetched by calling the GET zones API*/
                        "fenceId": 'b9875caf-5d33-4bbd-bea3-2144e60eb41a',
                        "name": "A bounding box with north east and south west",
                        "color": "#8b4dff",
                        "northEast": {
                            "latitude": -37.81544591805361,
                            "longitude": 144.9786114692688
                        },
                        "southWest": {
                            "latitude": -37.81758175613945,
                            "longitude": 144.9731397628784
                        }
                    }
                ],
                "circles": [
                    {
                    	/* This is the id of the circular fence being updated. This can be fetched by calling the GET zones API */
                        "fenceId": '00f3f2af-bcdf-494e-a81c-481aff88f992',
                        "name": "Test Circular fence with 8M radius",
                        "color": "#000ffff",
                        "radius" : 200.8360056433831,
                        "center": {
                            "latitude" : -37.81566628950337,
                            "longitude" : 144.9764871544965
                        }
                    }
                ],
                "polygons": [
                    {
                    	/* This is the id of the polygonal fence being updated. This can be fetched by calling the GET zones API*/
                        "fenceId": '36c9521e-3e8b-437a-a27d-9527c46a0b55',
                        "name": "A Polygonal Fence",
                        "color": "#836bff",
                        "vertices": [
                            {
                                "latitude" : -37.818717,
                                "longitude" : 144.983085
                            },
                            {
                                "latitude" : -37.819540,
                                "longitude" : 144.982125
                            },
                            {
                                "latitude" : -37.820298,
                                "longitude" : 144.985178
                            },
                            {
                                "latitude" : -37.820468,
                                "longitude" : 144.984228
                            },
                            {
                                "latitude" : -37.818768,
                                "longitude" : 144.984330
                            },
                            {
                                "latitude" : -37.819476,
                                "longitude" : 144.985033
                            },
                            {
                                "latitude" : -37.820527,
                                "longitude" : 144.982978
                            },
                            {
                                "latitude" : -37.818887,
                                "longitude" : 144.982587
                            }
                        ]
                    }
                ]
            }
        }
    }
};
var options = {
    uri: 'https://api.bluedotinnovation.com/1/fences',
    method: 'POST',
    json: fenceData
};

request(options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);