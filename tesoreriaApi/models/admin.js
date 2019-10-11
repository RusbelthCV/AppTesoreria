module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin' , {
        _uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING
    }, {tableName: 'tesorero'});
    return Admin;
}