    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.get('/health', (req, res) => res.json({status:'ok', service:'transactions-service'}));

    // mock transactions
let txs = [];
app.post('/transfer', (req,res)=> { const {from,to,amount} = req.body; const tx={id:'tx-'+Date.now(),from,to,amount,date:new Date().toISOString()}; txs.push(tx); res.json({success:true,tx}); });
app.get('/', (req,res)=> res.json(txs));


    const port = process.env.PORT || 4102;
    app.listen(port, ()=> console.log('transactions-service listening on', port));
