const { Client } = require('node-postgres');

exports.handler = (event, context, callback) => {
    // Only allow POST
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }
  
    (async () => {
        const client = new Client({
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          database: process.env.DB_NAME,
          password: process.env.DB_PASSWORD,
          port: process.env.DB_PORT
        });
        
        await client.connect();
       
        const res = await client.query('SELECT * from users');
        console.log(res);
        console.log(context);
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res),  
        });
        await client.end();
      })().catch(console.error);
  };