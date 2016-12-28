let counter = 0;

export function createRecipeData() {
  return {
    title: `Recipe #${counter++}`
  };
}

export function createRecipe(authorId) {
  return async (sequelize) => {
    const { recipe: Recipe } = sequelize.models;

    const newRecipe = await Recipe.create(createRecipeData());

    await newRecipe.setAuthor(authorId);

    return {
      recipe: [ newRecipe.toJSON() ]
    };
  };
}
