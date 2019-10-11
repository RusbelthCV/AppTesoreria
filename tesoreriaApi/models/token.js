module.exports = (sequelize , DataTypes) => {
    const Token = sequelize.define('token', {
        token: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        idadmin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nameadmin: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{tableName: 'token'});
    return Token;
}