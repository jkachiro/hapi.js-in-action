var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: 4000});

server.views({
    engines: {
        hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    isCached: false
});

server.register(require('dindin-api'), function (err) {

    if (err) {
        throw err;
    }

    server.route(require('./routes'));

    server.start(function () {
        console.log('Started server at', server.info.uri);
    });
});