boilerplate
index.js (express)
set up graphql, schema, and resolver
models(psql) using sequelize. Tables are made with last line of index.js
schema
resolvers 
  (what allow you to execute queries and mutations) 
  (schema and resolver names must match, as well with when they are called on client side)
create-react-app
  src/index.js
  routes/Home.js
add bcrypt (inside resolver)
register form (semantic-ui-react)
  Register.js
form errors
  models/user.js (through sequelize validations)
  schema/error.js - make Error type
  schema/user.js - make RegisterResponse type
    RegisterResponse becomes return value of Register type
  resolvers/user.js - formatErrors() and new return value
  frontend/Register.js
    change mutation
    add error to state
    change onSubmit
login form - with MobX
