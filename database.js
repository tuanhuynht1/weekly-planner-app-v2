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
            return err; // will return 'error'
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
            return res.rows[0]; // return the user 
        } catch(err){
            console.log(err);
            return err;
        }
    }

    // create new todo
    async addNewTodo(usr, pid, text, assigned_date){
        try{
            const res = await this.pool.query(`
                INSERT INTO todos (usr, pid, text, assigned_date)
                VALUES ('${usr}', ${pid}, '${text}', '${assigned_date}')
                RETURNING *;
            `);
            return res.rows[0]; // return user data just added 
        } catch(err){
            console.log(err);
            return err;
        }
    }

    // get all todos 
    async getTodos(usr){
        try{
            const res = await this.pool.query(`
                SELECT * FROM todos WHERE usr = '${usr}';
            `);
            return res.rows; // return todos
        } catch(err){
            console.log(err);
            return err;
        }
    }

    // toggle todo status
    async toggleStatus(tid){
        try{
            const res = await this.pool.query(`
                UPDATE todos
                SET completed = NOT completed
                WHERE tid = ${tid}
                RETURNING *; 
            `);
            return res.rows[0]; // return todos
        } catch(err){
            console.log(err);
            return err;
        }
    }

    // delete todo
    async deleteTodo(tid){
        try{
            const res = await this.pool.query(`
                DELETE FROM todos WHERE tid = ${tid};
            `);
            return res; // return the user 
        } catch(err){
            console.log(err);
            return err;
        }
    }


}

module.exports = PostgreSQL;