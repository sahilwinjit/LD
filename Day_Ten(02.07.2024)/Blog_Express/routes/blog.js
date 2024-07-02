const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs');

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'));
    res.render('home');
});

router.get('/blog', (req, res) => {
    // blogs.blogs.forEach(e => {
        //     console.log(e.title);
        // });
        // res.sendFile(path.join(__dirname, '../templates/blogHome.html'));
        res.render('blogHome', {
            blogs: blogs.blogs
        });
    });
    
router.get('/blogpost/:slug', (req, res) => {
    // blogs.blogs.forEach(e => {
    //     console.log(e.title);
    // });

    myBlog = blogs.blogs.filter((e) => {
        return e.slug == req.params.slug;
    });
    console.log(myBlog);
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'));
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    })
});

module.exports = router;

