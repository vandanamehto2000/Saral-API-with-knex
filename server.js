const express = require('express');
const app = express();
const knex = require('./connection/create_table')
const router = express.Router();
app.use(express.json());

app.use('/', router);

require('./routers/courses')(router)
require('./routers/chapter')(router)
require('./routers/exercise')(router)
require('./routers/join_tables')(router)
require('./routers/saral_api')(router)
require('./routers/create')(router)
require('./routers/update')(router)
require('./routers/delete')(router)

app.listen(8000, () => {
    console.log('server started on port 8000');
})