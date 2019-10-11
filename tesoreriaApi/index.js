/*===================
    REQUIRES
=====================*/
const express = require('express');
const adminRouter = require('./routes/admin-controller');
const cors = require('cors');

const body_Parser = require('body-parser');

const path = require('path');
const app = express();

//Configuraciones
app.set('port',process.env.PORT || 3000);

app.use(express.json());

app.use(body_Parser.urlencoded({extended:true}));
app.use(cors());

app.use('/api/admin',adminRouter);

app.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'));
});