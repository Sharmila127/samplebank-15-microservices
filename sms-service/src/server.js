const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'sms-service'}));

app.post('/send', (req,res)=> { console.log('sms send', req.body); res.json({success:true}); });


const port = process.env.PORT || 4114;
app.listen(port, ()=> console.log('sms-service listening on', port));
