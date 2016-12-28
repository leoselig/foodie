// @flow

export default function createResolvers(sequelize: Sequelize) {
  const { user: User } = sequelize.models;

  return {
    async getAuthToken(root, { email, password }) {
      const authToken = await User.authenticate(email, password);

      return authToken.toJSON();
    }
  };
}
