var config = {}

// Update to have your correct username and password
//Still not able to connect to the db
config.mongoURI = {
    development: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retyWrites=true&w=maority',
    test: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retyWrites=true&w=maority',
    production: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retyWrites=true&w=maority',
}
module.exports = config;
