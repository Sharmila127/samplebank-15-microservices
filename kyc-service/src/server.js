const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'kyc-service'}));

app.post('/verify', (req,res)=> res.json({verified:true, details:req.body}));


const port = process.env.PORT || 4108;
app.listen(port, ()=> console.log('kyc-service listening on', port));
