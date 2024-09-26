const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function to handle authentication in Apollo's context
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // if token is in the authorization header, remove the "Bearer" prefix
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req; // return req without user data if no token is present
    }

    try {
      // verify token and get user data out of it
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data; // add user data to the request object
    } catch (err) {
      console.log('Invalid token');
    }

    // return the request object so it can be used by Apollo's context
    return req;
  },

  // function to sign a token when a user logs in or signs up
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
