{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.resolve(__dirname, 'node_modules/@carbon'), path.resolve(__dirname, 'src')]
  }