module.exports = function (api) {
  api.cache(true);
  return {
  // presets: ["babel-preset-expo",'module:metro-react-native-babel-preset'],
  // plugins: ['tailwindcss-react-native/babel',
  // 'react-native-reanimated/plugin'],
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin']
  };
};
