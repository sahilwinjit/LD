const express = require('express');
const app = express();
const courses = require('./routes/courses');
const index = require('./routes/index');

app.use(express.json());
app.use('/api/courses', courses);
app.use('/', index);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

