// @flow

export default function createResolvers(sequelize: Sequelize) {
  const { user: User } = sequelize.models;

  return {
    async createAuthToken(root, { email, password }, r) {
      const user = await User.findByEmail(email);
      const authToken = await user.authenticate(password);

      return authToken.toJSON();
    }
  };
}
