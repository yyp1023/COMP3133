const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

app.get('/restaurants', async (req, res) => {
    const sortBy = req.query.sortBy;
    try {
        if (sortBy == 'ASC') {
            const restaurants = await restaurantModel.find({}).sort({'restaurant_id': 1});
            res.status(200).send(restaurants);
        } else if (sortBy == 'DESC') {
            const restaurants = await restaurantModel.find({}).sort({'restaurant_id': -1});
            res.status(200).send(restaurants);
        } else {
            const restaurants = await restaurantModel.find({});
            res.status(200).send(restaurants);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const cuisine = req.params.cuisine;
    const restaurants = await restaurantModel.find({cuisine: cuisine});
    try {
        if (restaurants.length != 0) {
            res.send(restaurants);
        } else {
            res.send(JSON.stringify({
                status: false,
                message: 'No data found'
            }));
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/Delicatessen', async (req, res) => {
    const restaurants = await restaurantModel.byDelicatessenButNotBrooklyn('Delicatessen', 'Brooklyn');
    try {
        if (restaurants.length != 0) {
            res.send(restaurants);
        } else {
            res.send(JSON.stringify({
                status: false,
                message: 'No data found'
            }))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/restaurant', async (req, res) => {
    const restaurant = new restaurantModel(req.body);
    try {
        await restaurant.save((err) => {
            if (err) {
                res.send(err);
            } else {
                res.send(restaurant);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;
