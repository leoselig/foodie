import {
  STRING
} from 'sequelize';

import { security } from '../../config';

export default function defineAuthToken(sequelize) {
  const { user: User } = sequelize.models;
  const AuthToken = sequelize.define('authToken', {
    token: STRING(security.TOKEN_LENGTH)
  });

  AuthToken.belongsTo(User);

  AuthToken.getUser = async function (token) {
    const authToken = await AuthToken.find({ where: { token } });

    if (!authToken) {
      throw new Error(`Invalid auth token "${token}"`);
    }

    return authToken.getUser();
  };
}
