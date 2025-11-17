const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'notifications-service'}));

app.post('/notify', (req,res)=> { console.log('notify', req.body); res.json({success:true}); });


const port = process.env.PORT || 4103;
app.listen(port, ()=> console.log('notifications-service listening on', port));
