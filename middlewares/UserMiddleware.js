const jwt = require('jsonwebtoken');

class UserMiddleware {
    static verifyLogin(req, res, next) {
        const {authorization} = req.headers

        if (!authorization) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        const [, token] = authorization.split(' ');

        try {
            const dados = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
            req.userId = dados.id;
            req.role = dados.role;

            console.log(`${req.role} ${req.userId} Logged successfully`);
            return next()
        } catch (error) {
            return res.status(403).json({message: 'Invalid Token'})
        }
    }

    static isShelter(req, res, next) {

        if(['admin','shelter'].includes(req.role)) {
            next()
        } else {
            console.error(`Forbidden for ${req.role}`);
            return res.status(403).json({message: 'Forbidden'})
        }
    }

    static isTutor(req, res, next) {

        if(['admin','tutor'].includes(req.role)) {
            next()
        } else {
            console.error(`Forbidden for ${req.role}`);
            return res.status(403).json({message: 'Forbidden'})
        }
    }
}

module.exports = UserMiddleware