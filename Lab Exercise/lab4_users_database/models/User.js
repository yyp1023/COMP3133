const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    address: {
        type: [{
            street: {
                type: String,
                required: true
            },
            suite: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true,
                validate: function(value) {
                    if (!value.match(/^[a-zA-Z\s]+$/)) {
                        throw new Error('Not valid city name');
                    }
                }
            },
            zipcode: {
                type: String,
                required: true,
                validate: function(value) {
                    if (!value.match(/^([0-9]{5})\-([0-9]{4})$/)) {
                        throw new Error('Not valid postal code');
                    }
                }
            },
            geo: {
                type: [{
                    lat: {
                        type: String,
                        required: true
                    },
                    lng: {
                        type: String,
                        required: true
                    }
                }]
            }
        }]
    },
    phone: {
        type: String,
        required: true,
        validate: function(value) {
            if (!value.match(/^([0-9])\-([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/)) {
                throw new Error('Not valid phone number');
            }
        }
    },
    website: {
        type: String,
        required: true,
        validate: function(value) {
            if (!value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
                throw new Error('Not valid URL');   
            }
        }
    },
    company: {
        type: [{
            name: {
                type: String,
                required: true
            },
            catchPhrase: {
                type: String,
                required: true
            },
            bs: {
                type: String,
                required: true
            }
        }]
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;