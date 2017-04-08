import { resolve } from 'path';

export default function configureWebpackDev(config) {
  return {
    ...config,
    output: {
      ...config.output,
      path: resolve('./public')
    },
    devServer: {
      contentBase: resolve('./public')
    }
  };
}
