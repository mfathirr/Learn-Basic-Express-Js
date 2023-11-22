const dbPool = require('../config/database.js');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${body.name}', '${body.email}',' ${body.address}' )`;

  dbPool.execute(SQLQuery);
};

const updateUser = (body, id) => {
  const SQLQuery = `UPDATE users 
                    set name='${body.name}', email='${body.email}', address='${body.address}'
                    WHERE id=${id}`;
  dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;
  dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
