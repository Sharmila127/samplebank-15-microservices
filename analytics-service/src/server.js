const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'analytics-service'}));

app.get('/summary', (req,res)=> res.json({users:1200,tx:3400}));


const port = process.env.PORT || 4110;
app.listen(port, ()=> console.log('analytics-service listening on', port));
