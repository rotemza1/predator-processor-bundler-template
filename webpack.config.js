import path from 'path';

const __dirname = import.meta.url.substring(7); // remove file://

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    library: {
        name: 'bundle',
        type: 'umd',
      },
  },
  target: 'node',
  optimization: {
    minimize: false
    },
};
