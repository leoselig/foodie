export default function configureWebpackProd(config) {
  return {
    output: {
      ...config.output,
      filename: 'bundle.[hash].js'
    }
  };
}
