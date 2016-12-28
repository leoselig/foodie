import {
  STRING
} from 'sequelize';

export default function defineRecipe(sequelize) {
  const { user: User } = sequelize.models;
  const Recipe = sequelize.define('recipe', { name: STRING });

  User.hasMany(Recipe, {
    foreignKey: 'authorId'
  });
  Recipe.belongsTo(User, {
    as: 'Author',
    foreignKey: 'authorId'
  });
}
