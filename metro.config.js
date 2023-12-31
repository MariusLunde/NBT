const { getDefaultConfig } = require('expo/metro-config');

module.exports = async () => {
    const config = await getDefaultConfig(__dirname);
    const { transformer, resolver } = config;

    config.transformer = {
        ...transformer,
    };
    config.resolver = {
        ...resolver,
    };

    return config;
};
