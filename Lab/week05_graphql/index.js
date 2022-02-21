var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema} = require('graphql');

// create graphql schema
var gqlSchema = buildSchema(
    `type Query {
        message: String
        sayHello: String
        greet(name: String!): String
        getStudent: Student
        getStudents: [Student]
    },
    type Student {
        id: Int
        firstname: String
        lastname: String
        city: String
        result: String
    }`
);

// define query resolver
let hello = () => {
    return 'Hello GBC';
}

let getStudent = () => {
    let s = {
        id: 1,
        firstname: "Pritesh",
        lastname: "Patel",
        city: "Toronto",
        result: "Pass"
    }
    return s;
}

let getStudents = () => {
    let s = {
        id: 1,
        firstname: "Pritesh",
        lastname: "Patel",
        city: "Toronto",
        result: "Pass"
    }
    return [s, s, s, s, s];
}

var gqlResolver = {
    message: () => 'Hello world',
    sayHello: hello,
    greet: (args) => {
        return `Welcome, ${args.name}`;
    },
    getStudent,
    getStudents
}

// create graphqlhttp middleware object
var gqlHttp = graphqlHTTP({
    schema: gqlSchema,
    rootValue: gqlResolver,
    graphiql: true
});

// create express with graphql
var app = express();
app.use((req, res, next) => {
    console.log(`Before GQL ${Date().toString()}`);
    console.log(req);
    next();
});
app.use('/graphql', gqlHttp);

// start the express server
app.listen(3000, () => {
    console.log('GraphQL Server running at http://localhost:3000/graphql');
});