const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'fraud-service'}));

app.post('/scan', (req,res)=> res.json({risk:'low'}));


const port = process.env.PORT || 4109;
app.listen(port, ()=> console.log('fraud-service listening on', port));
