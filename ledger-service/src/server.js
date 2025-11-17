const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'ledger-service'}));

app.get('/healthledger', (req,res)=> res.json({ledger:'ok'}));


const port = process.env.PORT || 4105;
app.listen(port, ()=> console.log('ledger-service listening on', port));
