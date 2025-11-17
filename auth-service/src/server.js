    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.get('/health', (req, res) => res.json({status:'ok', service:'auth-service'}));

    // mock auth
app.post('/login', (req,res)=> { const {username} = req.body; if(!username) return res.status(400).json({error:'no user'}); res.json({ token: 'demo-jwt-'+username }); });
app.post('/register', (req,res)=> res.json({ success:true }));


    const port = process.env.PORT || 4100;
    app.listen(port, ()=> console.log('auth-service listening on', port));
