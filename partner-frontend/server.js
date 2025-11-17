const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/health', (req,res)=>res.json({service:'partner-frontend', status:'ok'}));
const port = process.env.PORT || 3002;
app.listen(port, ()=> console.log('partner-frontend serving on', port));
