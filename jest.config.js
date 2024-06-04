module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jsdom" 
};
