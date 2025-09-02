const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SalvamentoDB', 'postgres', 'admin', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: false,
        underscored: true,
    },
    omitNull: true

});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
})();

module.exports = sequelize;