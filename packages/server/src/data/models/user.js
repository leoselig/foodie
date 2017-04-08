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

  User.Instance.prototype.authenticate = async function (password) {
    const { authToken: AuthToken } = sequelize.models;

    const hashedPassword = hashPassword(password);

    if (this.get('password') !== hashedPassword) {
      throw new Error(`Incorrect password for user "${this.get('email')}"`);
    }

    return AuthToken.create({
      user: this,
      token: generateRandomToken()
    });
  };

  User.findByEmail = async function (email) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error(`Unknown user "${email}"`);
    }

    return user;
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
