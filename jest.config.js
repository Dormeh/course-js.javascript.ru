module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest-setup-files-after-env.js'],
  globals: {
    __IS_DEV__: true,
  }
};
