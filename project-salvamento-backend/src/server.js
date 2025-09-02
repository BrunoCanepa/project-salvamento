const express = require('express');
const app = express();

require('./config/database');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(express.json());
app.use(require('./routes/productRoutes'))

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});