/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_post_like_relationship', {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
       primaryKey: true,
       references: {
        model: 'user',
        key: 'ID'
      }
    },
    post_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
       primaryKey: true,
       references: {
        model: 'post',
        key: 'ID'
      }
    }
  }, {
    tableName: 'user_post_like_relationship'
  });
};
