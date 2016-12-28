export default function createResolvers() {
  return {

    async recipes(root, args, context) {
      const recipes = await context.user.getRecipes();

      return recipes.map((recipe) => recipe.toJSON());
    }

  };
}
