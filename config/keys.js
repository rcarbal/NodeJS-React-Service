if (process.env.NODE_ENV === 'production'){
    // We are in production - return he prod set of keys
    module.exports = require('./prod');
}else{
    // We re in the development - return the dev keys!!!
    module.exports = require('./dev');
}