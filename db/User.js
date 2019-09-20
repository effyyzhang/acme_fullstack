const conn = require('./conn');
const { Sequelize } = conn;
const { UUID, UUIDV4, BOOLEAN, STRING } = Sequelize;

const User = conn.define('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  active: {
    type: BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
});

module.exports = User;
