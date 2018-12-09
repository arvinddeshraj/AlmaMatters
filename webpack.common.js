const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
   target: 'node',
  entry: {
       app: './dist/index.js'
    },
   plugins: [
        new CleanWebpackPlugin(['build']),
   ],
   output: {
    filename: 'build.bundle.js',
    path: path.resolve(__dirname, './build')
 },
externals: [nodeExternals({
   modulesFromFile: {
       exclude: ['knex'],
       include: [/* sections to explicitly include, i.e only 'dependencies' */]
   }
})],
};