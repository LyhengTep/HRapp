module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '^@screens/(.+)': './src/screens/\\1',
          '^@routes/(.+)': './src/routes/\\1',
          '^@components/(.+)': './src/components/\\1',
          '^@utils/(.+)': './src/utils/\\1',
          '^@themes/(.+)': './src/themes/\\1',
        },
      },
    ],
  ],
};
