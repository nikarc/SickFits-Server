/**
 * Connects to remote Prisma DB, allowing for querys in JS
 */
const { Prisma } = require('prisma-binding');
const { PRISMA_ENDPOINT, PRISMA_SECRET, NODE_ENV } = process.env;

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: PRISMA_ENDPOINT,
  secret: PRISMA_SECRET,
  // debug: NODE_ENV === 'development'
});

module.exports = db;