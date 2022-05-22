const Course = require('../models/Course');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => res.render('home', { title: 'TEST TITLE' }))
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
