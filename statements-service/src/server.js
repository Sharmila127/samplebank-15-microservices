const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'statements-service'}));

app.get('/:accId', (req,res)=> res.json({account:req.params.accId, entries:[] }));


const port = process.env.PORT || 4104;
app.listen(port, ()=> console.log('statements-service listening on', port));
