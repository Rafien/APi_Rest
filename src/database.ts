import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('td_api_rest', 'postgres', '7921', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });