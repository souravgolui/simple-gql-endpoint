const jwt = require('jsonwebtoken');
const env = require('./index');

function jwtAuth(req, res, next) {
    const header = req.header('Authorization');
    const token = header
    if (!token) return res.status(401).json({ msg: "Token Expired" })

    try {
        const decoded = jwt.verify(token, env.authKey)
        req.user = decoded
        next();
    } catch (error) {
        res.status(401).send({ msg: "Invalid Token" })
    }

}

module.exports = jwtAuth
