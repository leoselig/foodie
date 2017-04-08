export default function createResolvers(sequelize) {
  const { authToken: AuthToken } = sequelize.models;

  return {

    async viewer(root, { token }, context) {
      if (!token) {
        return {
          roles: [ 'GUEST' ]
        };
      }

      const user = await AuthToken.getUser(token);

      context.user = user;

      return user.toJSON();
    }

  };
}
