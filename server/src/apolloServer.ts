import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import type { Express } from 'express'

import { Resolveruserfriend } from './resolvers/Resolveruserfriend'

async function initApolloServer(app: Express) {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [Resolveruserfriend],
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
    playground: true,
  })

  server.applyMiddleware({
    app,
    cors: true,
  })
}

export default initApolloServer
