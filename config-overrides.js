const { 
    override, 
    addBabelPlugins, 
    addBabelPreset,
    removeModuleScopePlugin,
} = require('customize-cra');

module.exports = override(
    removeModuleScopePlugin(),
    ...addBabelPlugins(
      'emotion',
      [
        'babel-plugin-module-resolver',
        {
          root: ['./'],
          alias: {
              '^@/(.+)': './src/\\1'
          },
          extensions: ['.js', '.ts', '.tsx']
        }
      ]
    ),
    addBabelPreset('@emotion/babel-preset-css-prop'),
)