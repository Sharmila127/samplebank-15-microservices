const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'email-service'}));

app.post('/send', (req,res)=> { console.log('email send', req.body); res.json({success:true}); });


const port = process.env.PORT || 4113;
app.listen(port, ()=> console.log('email-service listening on', port));
