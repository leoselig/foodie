export function loginUser(userId) {
  return async (sequelize) => {
    const { authToken: AuthToken } = sequelize.models;

    const newAuthToken = await AuthToken.create({
      token: 'very secure',
      userId
    });

    return {
      authToken: [ newAuthToken.toJSON() ]
    };
  };
}
