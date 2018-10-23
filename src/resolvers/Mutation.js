const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if user is logged in

    const item = await ctx.db.mutation.createItem({
      data: { ...args }
    }, info);

    return item;
  },
  updateItem (parent, args, ctx, info) {
    // Copy args
    const updates = { ...args };
    // Remove id from object
    delete updates.id;
    // run update method
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info);
  }
};

module.exports = Mutations;
