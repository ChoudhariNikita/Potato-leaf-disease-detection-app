module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
    '@react-native/babel-preset'
  ],
  plugins: [
    ['module:react-native-dotenv'],
  ],
};