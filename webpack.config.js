const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/, // Apply rule to .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Serve files from the dist directory
    compress: true, // Enable gzip compression
    port: 9000, // Set port number
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
