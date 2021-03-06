
import Sequelize from "sequelize";
const sequelize = new Sequelize('slack', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: {
    unserscored: true,
  }
});
// const sequelize = new Sequelize("your-db-name", "postgres", "postgres", {
//   dialect: "postgres",
//   // operatorsAliases: Sequelize.Op
// });

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Team: sequelize.import('./team'),
  Message: sequelize.import('./message'),
};


Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
