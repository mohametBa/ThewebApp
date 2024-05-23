// mockJwt.js
const jwt = require('jsonwebtoken');

module.exports = {
  sign: jest.fn((payload, secret, options) => 'fake-jwt-token'),
  verify: jest.fn((token, secret) => ({ userId: '507f1f77bcf86cd799439011', role: 'client' }))
};
