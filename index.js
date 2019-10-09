

graphql(schema, "{teams {id points name}}", resolvers).then(res => console.log(JSON.stringify(res)));
