/**
 * Created by Arun on 16/09/2014.
 * Copyright : Bluedot Innovations.
 *
 */

var request = require('request');

var application = {
    security: {
        apiKey : '669ec2de-c7e9-415a-9680-333025ef9e28',
        customerApiKey: '86577370-7b91-11e4-bcb7-a0481cdc3311'
    },
    content: {
        beacon : {
            name: "Cafe Entrance",
            proximityUUID: "f7826da6-4fa2-4e98-8024-bc5b71e0898f",
            longitude: "123.34455",
            latitude: "47.777888",
            major: 12,
            minor: 13,
            type: "IOS"
        }
    }
};
var options = {
    uri: 'https://api.bluedotinnovation.com/1/beacons',
    method: 'POST',
    json: application
};

request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(response.body);
    }
);
