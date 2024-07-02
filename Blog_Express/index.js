const express = require('express');
const path = require('path');
const port = 3000;

var exphbs = require('express-handlebars');
const app = express();

// Instance - Handlebar engine.
const hbs = exphbs.create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")));

app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});


