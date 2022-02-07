const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://youngpyungyoo:Everlgjr2721@comp3123.pjdd1.mongodb.net/restaurant?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection');
});

app.use(restaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });