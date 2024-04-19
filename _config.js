var config = {}

config.mongoURI = {
    // test: 'mongodb+srv://eugene_don:<password>@ip-one.gjop4bg.mongodb.net/',
    development: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retryWrites=true&w=majority',
    production: 'mongodb+srv://eugene_don:<eugene_don>@ip-one.gjop4bg.mongodb.net/darkroom?retryWrites=true&w=majority',

}
module.exports = config;


// production: 'mongodb+srv://admin:CqSH70opjCd2cI3J@atlascluster.ijood98.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',
// development: 'mongodb+srv://admin:CqSH70opjCd2cI3J@atlascluster.ijood98.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',
// test: 'mongodb+srv://admin:CqSH70opjCd2cI3J@atlascluster.ijood98.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',