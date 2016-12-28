let counter = 0;

function createUserData(data) {
  return {
    email: `user${counter++}@my.app`,
    password: 'password',
    ...data
  };
}

export function createUser(data) {
  return async (sequelize) => ({
    user: [
      (await sequelize.models.user.createWithPassword(
        createUserData(data)
      )).toJSON()
    ]
  });
}

export function createUsers(number) {
  return async (sequelize) => {
    const users = [];

    for (let i = 0; i < number; i++) {
      users.push(
        (await createUser()(sequelize)).user[0]
      );
    }

    return { user: users };
  };
}
