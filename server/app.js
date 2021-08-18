const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://amitba:apass123@cluster0.fjdhl.mongodb.net/books?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.connection.once('open', () => console.log('connected to mongodb atlas'))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => console.log('listening for requests on  port 4000'));
