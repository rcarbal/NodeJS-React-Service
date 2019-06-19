const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/api/v01/test', { target: 'http://localhost:4000' }));
};