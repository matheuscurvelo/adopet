const jwt = require('jsonwebtoken');
const secret = 'dsmakdmsndjandfjasndnasjkn';
const token = jwt.sign({ foo: 'bar' }, secret, {expiresIn: '1h'});

console.log(token);

const decoded = jwt.verify(token, secret)

console.log(decoded);