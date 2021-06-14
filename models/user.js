'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    Pnome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    rg: DataTypes.INTEGER,
    filiacao: DataTypes.STRING,
    estadocivil: DataTypes.STRING,
    nasc: DataTypes.DATE,
    consc: DataTypes.STRING,
    titulo: DataTypes.INTEGER,
    zona: DataTypes.INTEGER,
    secao: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    wpp: DataTypes.INTEGER,
    cargo: DataTypes.STRING,
    lotacao: DataTypes.STRING,
    unid: DataTypes.STRING,
    matricula: DataTypes.INTEGER,
    concurso: DataTypes.INTEGER,
    admissao: DataTypes.DATE,
    tiposangue: DataTypes.STRING,
    status: DataTypes.STRING,
    filiacao: DataTypes.DATE,
    recadastramento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};