const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/health', (req,res)=>res.json({service:'admin-frontend', status:'ok'}));
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log('admin-frontend serving on', port));
