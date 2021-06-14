'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Pnome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      rg: {
        type: Sequelize.INTEGER
      },
      filiacao: {
        type: Sequelize.STRING
      },
      estadocivil: {
        type: Sequelize.STRING
      },
      nasc: {
        type: Sequelize.DATE
      },
      consc: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.INTEGER
      },
      zona: {
        type: Sequelize.INTEGER
      },
      secao: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      wpp: {
        type: Sequelize.INTEGER
      },
      cargo: {
        type: Sequelize.STRING
      },
      lotacao: {
        type: Sequelize.STRING
      },
      unid: {
        type: Sequelize.STRING
      },
      matricula: {
        type: Sequelize.INTEGER
      },
      concurso: {
        type: Sequelize.INTEGER
      },
      admissao: {
        type: Sequelize.DATE
      },
      tiposangue: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      filiacao: {
        type: Sequelize.DATE
      },
      recadastramento: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};