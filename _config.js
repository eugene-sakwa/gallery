var config = {}

// Update to have your correct username and password
//Still not able to connect to the db
config.mongoURI = {
    production: 'mongodb+srv://<eugene_don>:<eugene_don>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<eugene_don>:<eugene_don>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<eugene_don>:<eugene_don>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
