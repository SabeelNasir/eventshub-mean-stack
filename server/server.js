const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const router = require('./routes/router')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/api', router);


app.listen(port, function () {
    console.log(`auth server listening on port : ${port}`);
})