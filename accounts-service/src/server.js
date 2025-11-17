    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.get('/health', (req, res) => res.json({status:'ok', service:'accounts-service'}));

    // mock accounts list
let accounts = [ {id:'acc-1', owner:'user-1', balance:5000}, {id:'acc-2', owner:'user-2', balance:3000} ];
app.get('/', (req,res)=> res.json(accounts));
app.get('/:id', (req,res)=> { const a = accounts.find(x=>x.id===req.params.id); if(!a) return res.status(404).json({error:'not found'}); res.json(a); });


    const port = process.env.PORT || 4101;
    app.listen(port, ()=> console.log('accounts-service listening on', port));
