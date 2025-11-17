const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status:'ok', service:'customer-profile-service'}));

app.get('/:id', (req,res)=> res.json({id:req.params.id, name:'Demo User'}));


const port = process.env.PORT || 4112;
app.listen(port, ()=> console.log('customer-profile-service listening on', port));
