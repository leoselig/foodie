import RootMutation from './RootMutation';
import RootQuery from './RootQuery';
import Viewer from './Viewer';

export default function createResolvers(sequelize) {
  return {
    RootMutation: RootMutation(sequelize),
    RootQuery: RootQuery(sequelize),
    Viewer: Viewer(sequelize)
  };
}
