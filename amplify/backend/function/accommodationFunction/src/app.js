/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  ScanCommand,
} = require("@aws-sdk/lib-dynamodb");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser");
const express = require("express");
const axios = require("axios");
const validator = require('validator');


const ddbClient = new DynamoDBClient({ region: process.env.TABLE_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

let tableName = "accommodationTable";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "id";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/accommodations";
const UNAUTH = "UNAUTH";
const hashKeyPath = "/:" + partitionKeyName;
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : "";

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

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
};

const endpoint = process.env.GRAPHQL_ENDPOINT;
const apiKey = process.env.GRAPHQL_API_KEY;

const deleteQuery = /* GraphQL */ `
  mutation DeleteAccommodation(
    $input: DeleteAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    deleteAccommodation(input: $input, condition: $condition) {
      id
      availableDate
      description
      images
      price
      propertyType
      rented
      createdAt
      title
      address
      userId
      unitFeature
      latitude
      longitude
      savedaccommodations {
        items {
          id
          savedAccommodationId
          accommodationId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      User {
        id
        name
        status
        userType
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;

const createQuery = /* GraphQL */ `
  mutation CreateAccommodation(
    $input: CreateAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    createAccommodation(input: $input, condition: $condition) {
      id
      availableDate
      description
      images
      price
      propertyType
      rented
      createdAt
      title
      address
      userId
      unitFeature
      latitude
      longitude
      savedaccommodations {
        items {
          id
          savedAccommodationId
          accommodationId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      User {
        id
        name
        status
        userType
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      updatedAt
      __typename
    }
  }
`;

const updateQuery = /* GraphQL */ `
  mutation UpdateSavedAccommodation(
    $input: UpdateSavedAccommodationInput!
    $condition: ModelSavedAccommodationConditionInput
  ) {
    updateSavedAccommodation(input: $input, condition: $condition) {
      id
      Accommodations {
        items {
          id
          savedAccommodationId
          accommodationId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      User {
        id
        name
        status
        userType
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        owner
        __typename
      }
      createdAt
      updatedAt
      savedAccommodationUserId
      owner
      __typename
    }
  }
`;

const headers = {
  "x-api-key": apiKey,
  "Content-Type": "application/json",
};


/************************************
 * HTTP Get method to list objects *
 ************************************/

app.get(path, async function (req, res) {
  var params = {
    TableName: tableName,
    Select: "ALL_ATTRIBUTES",
  };

  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    res.json(data.Items);
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: "Could not load items: " + err.message });
  }
});

/************************************
 * HTTP Get method to query objects *
 ************************************/

app.get(path + hashKeyPath, async function (req, res) {
  const condition = {};
  condition[partitionKeyName] = {
    ComparisonOperator: "EQ",
  };

  if (userIdPresent && req.apiGateway) {
    condition[partitionKeyName]["AttributeValueList"] = [
      req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH,
    ];
  } else {
    try {
      condition[partitionKeyName]["AttributeValueList"] = [
        convertUrlType(req.params[partitionKeyName], partitionKeyType),
      ];
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: "Wrong column type " + err });
    }
  }

  let queryParams = {
    TableName: tableName,
    KeyConditions: condition,
  };

  try {
    const data = await ddbDocClient.send(new QueryCommand(queryParams));
    res.json(data.Items);
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: "Could not load items: " + err.message });
  }
});

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(
  path + "/object" + hashKeyPath + sortKeyPath,
  async function (req, res) {
    const params = {};
    if (userIdPresent && req.apiGateway) {
      params[partitionKeyName] =
        req.apiGateway.event.requestContext.identity.cognitoIdentityId ||
        UNAUTH;
    } else {
      params[partitionKeyName] = req.params[partitionKeyName];
      try {
        params[partitionKeyName] = convertUrlType(
          req.params[partitionKeyName],
          partitionKeyType,
        );
      } catch (err) {
        res.statusCode = 500;
        res.json({ error: "Wrong column type " + err });
      }
    }
    if (hasSortKey) {
      try {
        params[sortKeyName] = convertUrlType(
          req.params[sortKeyName],
          sortKeyType,
        );
      } catch (err) {
        res.statusCode = 500;
        res.json({ error: "Wrong column type " + err });
      }
    }

    let getItemParams = {
      TableName: tableName,
      Key: params,
    };

    try {
      const data = await ddbDocClient.send(new GetCommand(getItemParams));
      if (data.Item) {
        res.json(data.Item);
      } else {
        res.json(data);
      }
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err.message });
    }
  },
);

/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path, async function (req, res) {
  if (userIdPresent) {
    req.body["userId"] =
      req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  const { id, title, address, propertyType, images, description, price, rented, availableDate, unitFeature, latitude, longitude, userId } = req.body;

  if (!validator.isUUID(userId, 4)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Input validation
  if (!validator.isAlphanumeric(title, 'en-US', { ignore: ' ' })) {
    return res.status(400).json({ error: 'Invalid title' });
  }

  if (!validator.isFloat(price.toString())) {
    return res.status(400).json({ error: 'Invalid price' });
  }

  // Sanitize inputs
  const sanitizedTitle = validator.escape(title);
  const sanitizedDescription = validator.escape(description)
  
  // Prepare the item for DynamoDB
  const accomm = {
    id: id || uuidv4(), // Generate UUID if not provided
    sanitizedTitle,
    address,
    propertyType,
    images,
    sanitizedDescription,
    price,
    rented: rented || false,
    availableDate,
    unitFeature,
    latitude,
    longitude,
    userId,
    createdAt: new Date().toISOString(),
  };

  const payload = {
    query: updateQuery,
    variables: {
      input: accomm
    }
  }

  let data;
  try {
    const response = await axios.post(endpoint, payload, { headers });
    data = response.data?.data?.listAccommodations?.items;
    res.json({ success: "Accommodation update successfully", data });
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update accommodation", details: err });
  }

  // try {
  //   const data = await ddbDocClient.send(new PutCommand(putItemParams));
  //   res.json({ success: "put call succeed!", url: req.url, data });
  // } catch (err) {
  //   res.statusCode = 500;
  //   res.json({ error: err, url: req.url, body: req.body });
  // }

});

app.put('/accommodations/university', async function (req, res) {
  if (userIdPresent) {
    req.body["userId"] =
      req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  const { id, title, address, images, description, price, rented, availableDate, unitFeature, latitude, longitude, userId } = req.body;

  if (!validator.isUUID(userId, 4)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Input validation
  if (!validator.isAlphanumeric(title, 'en-US', { ignore: ' ' })) {
    return res.status(400).json({ error: 'Invalid title' });
  }

  if (!validator.isFloat(price.toString())) {
    return res.status(400).json({ error: 'Invalid price' });
  }

  // Sanitize inputs
  const sanitizedTitle = validator.escape(title);
  const sanitizedDescription = validator.escape(description)
  
  // Prepare the item for DynamoDB
  const accomm = {
    id: id || uuidv4(), // Generate UUID if not provided
    sanitizedTitle,
    address,
    propertyType: 'UNIVERSITY', // Fixed type for university accommodations
    images,
    sanitizedDescription,
    price,
    rented: rented || false,
    availableDate,
    unitFeature,
    latitude,
    longitude,
    userId,
    createdAt: new Date().toISOString(),
  };

  const payload = {
    query: updateQuery,
    variables: {
      input: accomm
    }
  }

  let data;
  try {
    const response = await axios.post(endpoint, payload, { headers });
    data = response.data?.data?.listAccommodations?.items;
    res.json({ success: "Accommodation update successfully", data });
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update accommodation", details: err });
  }

});

/************************************
 * HTTP post method for insert object *
 *************************************/
app.post(path, async function (req, res) {
  if (userIdPresent) {
    req.body["userId"] =
      req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }
  const { id, title, address, propertyType, images, description, price, rented, availableDate, unitFeature, latitude, longitude, userId } = req.body;

  if (!validator.isUUID(userId, 4)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Input validation
  if (!validator.isAlphanumeric(title, 'en-US', { ignore: ' ' })) {
    return res.status(400).json({ error: 'Invalid title' });
  }

  if (!validator.isFloat(price.toString())) {
    return res.status(400).json({ error: 'Invalid price' });
  }

  // Sanitize inputs
  const sanitizedTitle = validator.escape(title);
  const sanitizedDescription = validator.escape(description)
  
  // Prepare the item for DynamoDB
  const newAccomm = {
    id: id || uuidv4(), // Generate UUID if not provided
    sanitizedTitle,
    address,
    propertyType,
    images,
    sanitizedDescription,
    price,
    rented: rented || false,
    availableDate,
    unitFeature,
    latitude,
    longitude,
    userId,
    createdAt: new Date().toISOString(),
  };

  const payload = {
    query: createQuery,
    variables: {
      input: newAccomm
    }
  }

  let data;
  try {
    const response = await axios.post(endpoint, payload, { headers });
    data = response.data?.data?.listAccommodations?.items;
    res.json({ success: "Accommodation created successfully", data });
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create accommodation", details: err });
  }

  // try {
  //   const data = await ddbDocClient.send(new PutCommand(putItemParams));
  //   res.json({ success: "Accommodation created successfully", data });
  // } catch (err) {
  //   res.status(500).json({ error: "Failed to create accommodation", details: err });
  // }
});

app.post('/accommodations/university', async function (req, res) {
  const { title, address, images, description, price, availableDate, unitFeature, latitude, longitude, userId } = req.body;


  // Input validation
  if (!validator.isAlphanumeric(title, 'en-US', { ignore: ' ' })) {
    return res.status(400).json({ error: 'Invalid title' });
  }

  if (!validator.isFloat(price.toString())) {
    return res.status(400).json({ error: 'Invalid price' });
  }

  // Sanitize inputs
  const sanitizedTitle = validator.escape(title);
  const sanitizedDescription = validator.escape(description)

  if (!validator.isUUID(userId, 4)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  
  // For university partners, the property type is always 'UNIVERSITY'
  const newAccomm = {
    id: uuidv4(),
    sanitizedTitle,
    address,
    propertyType: 'UNIVERSITY', // Fixed type for university accommodations
    images,
    sanitizedDescription,
    price,
    rented: false,
    availableDate,
    unitFeature,
    latitude,
    longitude,
    userId,
    createdAt: new Date().toISOString(),
  };

  

  const payload = {
    query: createQuery,  // Assuming you have a GraphQL mutation for creating accommodation
    variables: { input: newAccomm }
  };

  try {
    const response = await axios.post(endpoint, payload, { headers });
    const data = response.data?.data?.createAccommodation;
    res.json({ success: "University Accommodation created successfully", data });
  } catch (error) {
    res.status(500).json({ error: "Failed to create university accommodation", details: error });
  }
});

/**************************************
 * HTTP remove method to delete object *
 ***************************************/
// Delete accommodation
app.delete(`${path}/:accommodationId`, async function (req, res) {
  const { accommodationId } = req.params;

  // Validate the accommodation ID
  if (!validator.isUUID(accommodationId, 4)) {
    return res.status(400).json({ error: 'Invalid accommodation ID' });
  }

  // Create the payload for the GraphQL mutation
  const payload = {
    query: deleteQuery,
    variables: {
      input: {
        id: accommodationId, // Pass the accommodation ID
      },
    },
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: req.headers.authorization || '', // Authorization token (if needed)
  };

  // Send the delete request to the GraphQL API
  try {
    const response = await axios.post(endpoint, payload, { headers });
    const data = response.data?.data?.deleteAccommodation;

    if (data) {
      res.json({ success: "Accommodation deleted successfully", data });
      console.log("Deleted accommodation:", data);
    } else {
      res.status(404).json({ error: "Accommodation not found or deletion failed" });
    }
  } catch (error) {
    console.error("Error deleting accommodation:", error);
    res.status(500).json({ error: "Failed to delete accommodation", details: error.message });
  }
});

// Delete university accommodation
app.delete(`${path}/university/:accommodationId`, async function (req, res) {
  const { accommodationId } = req.params;

  // Validate the accommodation ID
  if (!validator.isUUID(accommodationId, 4)) {
    return res.status(400).json({ error: 'Invalid accommodation ID' });
  }

  // Create the payload for the GraphQL mutation
  const payload = {
    query: deleteQuery,
    variables: {
      input: {
        id: accommodationId, // Pass the accommodation ID
      },
    },
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: req.headers.authorization || '', // Authorization token (if needed)
  };

  // Send the delete request to the GraphQL API
  try {
    const response = await axios.post(endpoint, payload, { headers });
    const data = response.data?.data?.deleteAccommodation;

    if (data) {
      res.json({ success: "Accommodation deleted successfully", data });
      console.log("Deleted accommodation:", data);
    } else {
      res.status(404).json({ error: "Accommodation not found or deletion failed" });
    }
  } catch (error) {
    console.error("Error deleting accommodation:", error);
    res.status(500).json({ error: "Failed to delete accommodation", details: error.message });
  }
});



// app.delete(
//   path + "/object" + hashKeyPath + sortKeyPath,
//   async function (req, res) {
//     const params = {};
//     if (userIdPresent && req.apiGateway) {
//       params[partitionKeyName] =
//         req.apiGateway.event.requestContext.identity.cognitoIdentityId ||
//         UNAUTH;
//     } else {
//       params[partitionKeyName] = req.params[partitionKeyName];
//       try {
//         params[partitionKeyName] = convertUrlType(
//           req.params[partitionKeyName],
//           partitionKeyType,
//         );
//       } catch (err) {
//         res.statusCode = 500;
//         res.json({ error: "Wrong column type " + err });
//       }
//     }
//     if (hasSortKey) {
//       try {
//         params[sortKeyName] = convertUrlType(
//           req.params[sortKeyName],
//           sortKeyType,
//         );
//       } catch (err) {
//         res.statusCode = 500;
//         res.json({ error: "Wrong column type " + err });
//       }
//     }

//     let removeItemParams = {
//       TableName: tableName,
//       Key: params,
//     };

//     try {
//       let data = await ddbDocClient.send(new DeleteCommand(removeItemParams));
//       res.json({ url: req.url, data: data });
//     } catch (err) {
//       res.statusCode = 500;
//       res.json({ error: err, url: req.url });
//     }
//   },
// );

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
