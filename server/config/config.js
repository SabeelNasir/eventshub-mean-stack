const sessionOptions = {
    secret: 'express-session-secret',
    resave: 'false',
    saveUninitialized: 'false',
    cookie: {}
}
module.exports = {
    authentication: {
        jwtSecret: 'jwtSecret',
        TTL: 3600
    },
    sessionOptions: sessionOptions
}