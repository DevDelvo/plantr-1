const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/plantr')


const Gardener = db.define('gardener',{
    name: {type:Sequelize.STRING, allowNull: false},
    age: {type: Sequelize.INTEGER, allowNull: false}
});

const Plot = db.define('plot',{
    size: {type:Sequelize.INTEGER},
    shaded: {type:Sequelize.BOOLEAN},
    gardenerId: {type:Sequelize.INTEGER}
});

const Vegetable = db.define('vegetable',{
    name: {type:Sequelize.STRING},
    color: {type:Sequelize.STRING},
    planted_on: {type: Sequelize.INTEGER}
});

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});

Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});


module.exports = {db, Gardener, Plot, Vegetable}