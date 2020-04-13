const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema.js');

// import routes from './routes';

function init() {
  return new Promise(resolve => {
    // Create server instance
    const app = express();

    // ==================== TOP-LEVEL MIDDLEWARE ==================== //
    app.use(cors());
    app.use(bodyParser.json());

    massive(process.env.DATABASE_URI).then(db => {
      console.log('✅ Database Initialized');

      app.set('db', db);

      // =================== DEFINE GRAPHQL ROUTES ==================== //
      const server = new ApolloServer({
        schema: schema.default,
        context: () => {
          return {
            db: db,
          };
        },
      });

      server.applyMiddleware({ app, path: '/graphql' });

      // ===================== DEFINE REST ROUTES ===================== //
      app.get('/health', (req, res) => {
        res.status(200).send('Working');
      });

      // routes(app);

      // ======================== START SERVER ======================== //
      if (!module.parent) {
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
          console.log(`🚀 Listening on port ${PORT}`);
        });
      }

      resolve(app);
    });
  });
}

if (!module.parent) {
  init(); // start server
}

export default init; // passed to parent for testing purposes
