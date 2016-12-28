export default function createResolvers(sequelize) {
  const { authToken: AuthToken } = sequelize.models;

  return {

    async viewer(root, { token }, context) {
      const user = await AuthToken.getUser(token);

      context.user = user;

      return user.toJSON();
    }

  };
}
