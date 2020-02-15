const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema");

const app = express();
const PORT = 3333;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
