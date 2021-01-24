const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {
        id: 1,
        name: 'Rushikesh',
        location: 'Mumbai'
    },
    {
        id: 2,
        name: 'Akash',
        location: 'Pune'
    },
    {
        id: 3,
        name: 'Kartik',
        location: 'GOA'
    },
];

app.get('/', (req, res) => {
    res.send(`Hello World`);

});


app.get('/api/courses', (req, res) => {
    res.send(courses);

});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`The Course with given ID  was not found `)
    res.send(course);
});

app.post('/ ', (req, res) => {
    const course = {
        id: course.length + 1,
        name: req.body.name,
        location: req.body.location
    };
    courses.push(course);
    res.send(course);
});

app.listen(3001, () => {
    console.log("Server is running on 3001");
})
