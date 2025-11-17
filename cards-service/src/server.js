const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'cards-service'}));

app.get('/cards/:customerId', (req,res)=> res.json([{cardId:'card-1',type:'visa',status:'active'}])); 


const port = process.env.PORT || 4106;
app.listen(port, ()=> console.log('cards-service listening on', port));
