var config = {}

// Update to have your correct username and password
//Still not able to connect to the db
config.mongoURI = {
    //test: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net'
    production: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net',
    development: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net',
    test: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net',
}
module.exports = config;
