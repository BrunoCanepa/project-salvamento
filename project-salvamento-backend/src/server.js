require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('./config/database');

//app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(require('./routes/productRoutes'))

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
