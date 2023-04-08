import { Sequelize } from "sequelize";


const db = new Sequelize('DIS_ALLUVIAL', 'sa', 'Geobanksrv5501',{
    host: 'GEOBANK-SRV',
    dialect: "mssql"
})

export default db