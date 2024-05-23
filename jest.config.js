module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: "node",
    setupFilesAfterEnv: ["./jest.setup.js"],
  };
  