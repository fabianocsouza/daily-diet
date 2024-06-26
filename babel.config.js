module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver", {
          "root": ["./src"],
          "alias": {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@service/*': './src/service/*',
            '@context/*': './src/context/*',
            '@context/*': './src/context/*',
            '@dtos/*': './src/dtos/*'
          }
        }
      ],  
    ]
  };
};
