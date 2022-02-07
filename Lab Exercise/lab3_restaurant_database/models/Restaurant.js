const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    address: {
        type: [{
            building: {
                type: String
            },
            street: {
                type: String
            },
            zipcode: {
                type: String
            }
        }]
    },
    city: {
        type: String
    },
    cuisine: {
        type: String
    },
    name: {
        type: String
    },
    restaurant_id: {
        type: Number
    }
});

RestaurantSchema.static('byDelicatessenButNotBrooklyn', function(cuisine, city) {
    return this.find({
        cuisine: cuisine,
        city: {$ne: city}
    }, {_id: 0}).sort({'name': 1});
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;