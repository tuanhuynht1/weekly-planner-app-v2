const { Pool } = require('pg');

class PostgreSQL {
    constructor(connectionString) {
        this.pool = new Pool({
            connectionString: connectionString
        })
    }

    // test connection
    async test(){
        try{
            const res = await this.pool.query('SELECT * FROM pg_tables;');
            return res.rows; 
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }

    // define CRUD operations here
}

module.exports = PostgreSQL;