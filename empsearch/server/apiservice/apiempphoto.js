const express=require('express');
const app=express();

app.use('/empphoto', express.static('./assets/images-from-fusion'));
app.listen(5000);
