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
  },
  async deleteItem (parent, args, ctx, info) {
    const where = { id: args.id };
    // Find item
    const item = await ctx.db.query.item({ where }, `{ id, title }`);
    // TODO: Check persmissions on item
    // Delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = Mutations;
