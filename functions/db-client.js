import postgres from 'postgres';

exports.handler = (event, context, callback) => {
    // Only allow POST
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  const sql = postgres('', {
      host        : process.env.DB_HOST,
      port        : process.env.DB_PORT,
      database    : process.env.DB_NAME,
      username    : process.env.DB_USER,
      password    : process.env.DB_PASSWORD,
      ssl         : false, // True, or options for tls.connect
    }
  )

    try {
      const users = sql`
      select * from users
    `
      console.log(usres);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(users),  
      });
    } catch (err) {
      console.log(err);
    }
};