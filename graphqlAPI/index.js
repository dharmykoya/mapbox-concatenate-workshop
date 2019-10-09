const { graphql, buildSchema } = require("graphql");
const axios = require("axios");

const schema = buildSchema(`
    type Team {
        id: ID
        points: Int
        name: String
    }

    type Query {
        teams: [Team]
    }
`);

const resolvers = {
  teams: () => {
    return axios
      .get("https://graphqlvoting.azurewebsites.net/api/score")
      .then(res => console.log(34, res.data));
  }
};

module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const teams = await graphql(schema, "{teams {id points name}}", resolvers);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: teams
  };
};
