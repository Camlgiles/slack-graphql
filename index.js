import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import  { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import cors from 'cors';

// import typeDefs from './schema/hi';
// import resolvers from './resolvers/hi';
import models from './models';

const types = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(types);
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

export const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
});

const PORT = 8080;
const app = express();

//////////////////////////
app.use(cors('*')); // all websites can access db
//////////////////////////

const graphqlEndpoint = '/graphql';

app.use(
  graphqlEndpoint, 
  bodyParser.json(), 
  graphqlExpress({ 
    schema: schema, 
    context: { models, user: {id: 1} } 
  }));

app.use("/graphiql", graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync().then(() => {
  app.listen(PORT);
})

///////////// to drop and reset database
// models.sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT);
// });