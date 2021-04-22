module.exports = {
    rootDir: '.',

    transform: {
        '^.+\\.js$': 'babel-jest'
    },

    transformIgnorePatterns: ['<rootDir>/node_modules/@lightningjs/sdk'],
};