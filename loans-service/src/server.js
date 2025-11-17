const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'loans-service'}));

app.get('/loans/:customerId', (req,res)=> res.json([{loanId:'loan-1',amount:10000,status:'open'}])); 


const port = process.env.PORT || 4107;
app.listen(port, ()=> console.log('loans-service listening on', port));
