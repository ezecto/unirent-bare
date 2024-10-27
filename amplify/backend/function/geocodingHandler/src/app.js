/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const { Client } = require("@googlemaps/google-maps-services-js");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const client = new Client({});

/**********************
 * Example get method *
 **********************/

// // req.query -> placename -> get autocomplete
// app.get("/autocomplete", function (req, res) {
//   // Add your code here
//   // res.json({ success: "get call succeed!", url: req.url });

//   const params = {
//     params: {
//       input: req.query.query,
//       key: process.env.GOOGLE_MAPS_API_KEY,
//     },
//     timeout: 5000
//   }
//   client.placeAutocomplete(params).then(r => {
//     res.json(r.data.predictions);
//   }).catch(e => {
//     res.json({
//       error: e.response.data.error_message,
//       url: req.url,
//       body: req.body,
//     });
//   })
// });

// req.placeId -> placeId -> get geocode
app.get("/geocoding", function (req, res) {
  // Add your code here
  // res.json({ success: "get call succeed!", url: req.url });
  console.log("get geocode by place id");
  const params = {
    params: {
      place_id: req.query.placeId,
      key: process.env.G_PLACES_API_KEY,
    },
    timeout: 5000
  }
  client.placeDetails(params).then(r => {
    res.json(r.data.result);
  }).catch(e => {
    res.json({
      error: e.response.data.error_message,
      url: req.url,
      body: req.body,
    });
  })
});

app.get("/geocoding/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

// code start
app.post("/geocoding", function (req, res) {
  console.log("geocoding start...");

  client
    .geocode({
      params: {
        address:
          req.body.street + " " + req.body.country + " " + req.body.postalCode,
        key: process.env.G_PLACES_API_KEY,
      },
      timeout: 5000, // milliseconds
    })
    .then((r) => {
      res.json(r.data.results[0]);
    })
    .catch((e) => {
      res.json({
        error: e.response.data.error_message,
        url: req.url,
        body: req.body,
      });
    });
});

app.post("/geocoding/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/geocoding", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/geocoding/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/geocoding", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/geocoding/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
