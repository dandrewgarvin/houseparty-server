export default {
  Query: {
    getUser: async (obj, args, ctx) => {
      return {
        id: 'user:7',
        name: 'Andrew Garvin',
        email: 'dandrewgarvin@gmail.com',
      };
    },
  },
  Mutation: {},
};
