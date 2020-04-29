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
            const res = await this.pool.query(`SELECT 'Hello World!';`);
            return res.rows; 
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }

    // create new user
    async addNewUser(usr, pwd){
        try{
            const res = await this.pool.query(`
                INSERT INTO users
                VALUES ('${usr}', '${pwd}')
                RETURNING *;
            `);
            return res.rows[0]; // return user data just added 
        } catch(err){
            console.log(err);
            return err;
        }
    }

    // get user by username
    async getUser(usr){
        try{
            const res = await this.pool.query(`
                SELECT * FROM users WHERE usr = '${usr}';
            `);
            console.log('--------------------',res);
            return res.rows[0]; // return the user 
        } catch(err){
            console.log(err);
            return err;
        }
    }

}

module.exports = PostgreSQL;