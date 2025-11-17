const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'billing-service'}));

app.post('/invoice', (req,res)=> res.json({invoiceId:'inv-'+Date.now()}));


const port = process.env.PORT || 4111;
app.listen(port, ()=> console.log('billing-service listening on', port));
