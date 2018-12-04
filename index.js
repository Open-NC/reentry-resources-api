'use strict'
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const path = require('path')
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const router = express.Router()
const { merge } = require('lodash');
console.log('I am about to create an apollo server');

const server = new ApolloServer({ 
  typeDefs: [
    require('./app_api/app_schema'),
    require('./open_referral_api/open_referral_schema'),
  ],
  resolvers: merge(
    require('./app_api/app_resolvers'),
    require('./open_referral_api/open_referral_resolvers'),
  ),
  context: ({ req }) => ({
    session: req.session,
  })
});




const app = express().use(cors());
// app.use((req, resp, next) => {
//   console.log('I am in the middleware');
//   next();
// });
//app.use(awsServerlessExpressMiddleware.eventContext())
console.log('I am about to apply middleware');

server.applyMiddleware({ app });
// Export your express server so you can import it in the lambda function.
module.exports = app;
// module.exports.graphqlHandler = server.createHandler({
//   cors: {
//     origin: '*',
//     credentials: true,
//   },
// });

