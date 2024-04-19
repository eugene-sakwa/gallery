var config = {}

config.mongoURI = {
    development: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/?retryWrites=true&w=majority&appName=IP-One',
    //development: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/?retryWrites=true&w=majority&appName=IP-One',
    //test: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retryWrites=true&w=majority',
    production: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/?retryWrites=true&w=majority&appName=IP-One'
    //production: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retryWrites=true&w=majority',

}
module.exports = config;