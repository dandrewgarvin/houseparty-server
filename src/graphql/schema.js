import { makeExecutableSchema } from 'graphql-tools';

// ==================== TYPEDEFS ==================== //
import defaultTypes from './types/_defaults.graphql';
import userTypes from './types/users.graphql';

// =================== RESOLVERS ==================== //
import userResolver from './resolvers/users';

// ===================== EXPORT SCHEMA ===================== //
export default makeExecutableSchema({
  typeDefs: [defaultTypes, userTypes],
  resolvers: {
    Query: { ...userResolver.Query },
    Mutation: { ...userResolver.Mutation },
  },
});
