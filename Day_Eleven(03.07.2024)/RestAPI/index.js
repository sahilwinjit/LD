const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());


// Data
const courses = [
    {
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    }
];

app.get('/', (req, res) => {
    res.send("Hello.");
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
//     // res.send(req.params.year);
// });

app.get('/api/courses/:id', (req, res) => {
    // res.send(req.query);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    if(!course) { //404
        return res.status(404).send('Not Found');
    } 

    res.send(course);
});

// POST Request
app.post('/api/courses', (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const { error } = schema.validate(req.body);
    console.log(error);

    if(error) {
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    // if(!req.body.name || req.body.name.length < 3) {
    //     // 400 Bad Request
    //     res.status(400).send('Error');
    //     return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// PUT Request
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) {
        res.status(400).send("Error 404 (PUT)");
        return;
    }

    // Validate
    // If invalid, return 400 - Bad Request.
    // const schema = Joi.object({
    //     name: Joi.string().min(3).required()
    // });

    // const { error } = schema.validate(req.body);
    // console.log(error);

    // const result = validateCourse(req.body);
    // if(result) {
    //     // 400 Bad Request
    //     return res.status(400).send(result.details[0].message);
    // }

    const { error } = validateCourse(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }


    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return { error } = schema.validate(course);
    
}

// Delete Request
app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('Not available (Delete');
        return;
    }

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
});



// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

