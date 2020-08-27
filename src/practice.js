//echo "console.log('hello, practice')" >> ./src/practice.js
//node ./src/practice.js

require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  //connection: 'postgresql://dunder_mifflin@localhost/knex-practice',
  //connection: 'postgresql://dunder_mifflin:password-here@localhost/knex-practice',
  connection: process.env.DB_URL
})

//const q1 = knexInstance('amazong_products').select('*').toQuery()
//const q2 = knexInstance.from('amazong_products').select('*').toQuery()
//console.log('q1:', q1)
//console.log('q2:', q2)

knexInstance.from('amazong_products').select('*')