import configureWebpackBase from './config/configureWebpackBase';
import configureWebpackDev from './config/configureWebpackDev';

export default configureWebpackDev(configureWebpackBase());
