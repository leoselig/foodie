import defineUser from './user';
import defineAuthToken from './authToken';
import defineRecipe from './recipe';

export default function defineModels(sequelize) {
  defineUser(sequelize);
  defineAuthToken(sequelize);
  defineRecipe(sequelize);
}
