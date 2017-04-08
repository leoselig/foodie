export default function createResolvers() {
  return {

    async currentUser(root, args, context) {
      return context.user
        ? context.user.toJSON()
        : null;
    },

    async recipes(root, args, context) {
      const recipes = await context.user.getRecipes();

      return recipes.map((recipe) => recipe.toJSON());
    }

  };
}
