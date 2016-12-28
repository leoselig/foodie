import {
  STRING
} from 'sequelize';

import {
  hashPassword,
  generateRandomToken
} from '../../utils/security';

export default function defineUser(sequelize) {

  const User = sequelize.define('user', {
    email: STRING,
    password: STRING(1024)
  });

  User.authenticate = async function (email, password) {
    const { authToken: AuthToken } = sequelize.models;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error(`Unknown user "${email}"`);
    }

    const hashedPassword = hashPassword(password);

    if (user.get('password') !== hashedPassword) {
      throw new Error(`Incorrect password for user "${email}"`);
    }

    return AuthToken.create({
      user,
      token: generateRandomToken()
    });
  };

  User.createWithPassword = function ({
    password,
    ...data
  }) {
    return User.create({
      ...data,
      password: hashPassword(password).toString()
    });
  };
}
