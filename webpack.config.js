import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin  from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default () => ({
  entry: './src/index.js',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',

  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public/index.html'),
    }),
  ],

  devServer: {
    contentBase: path.resolve('public/'),
    compress: true,
    hot: true,
    port: 3000,
    publicPath: '/',
  },
});
