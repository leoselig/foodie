export default async (sequelize) => {
  await sequelize.models.user.createWithPassword({
    email: 'admin@foodie.dev',
    password: 'admin'
  });
};
