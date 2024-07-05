const express = require('express');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

