// mockUser.js
const user = {
    _id: '507f1f77bcf86cd799439011',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36bCF7d24/jlxdhl9C/4Mcm', // hashed 'password'
    role: 'client'
  };
  
  module.exports = {
    findOne: jest.fn().mockResolvedValue(user),
    save: jest.fn().mockResolvedValue(user)
  };
  