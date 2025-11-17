const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/health', (req,res)=>res.json({service:'mobile-frontend', status:'ok'}));
const port = process.env.PORT || 3003;
app.listen(port, ()=> console.log('mobile-frontend serving on', port));
