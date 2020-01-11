const configs = {
    require: ['intelli-espower-loader'],
    recursive: true,
    extension: ['js'],
    spec: ['./test/**/*.test.js'],
    exit: true,
    timeout: 3 * 1000,
    colors: true,
};

if (process.env.VSCODE === '1') {
    delete configs.spec;
}

if (process.env.DEBUG === '1') {
    delete configs.require;
    delete configs.spec;
}

module.exports = configs;
