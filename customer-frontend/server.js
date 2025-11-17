const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/health', (req,res)=>res.json({service:'customer-frontend', status:'ok'}));
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('customer-frontend serving on', port));
