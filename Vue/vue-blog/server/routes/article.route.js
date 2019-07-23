const router = require('express').Router();

const article = require('../controllers/article.controller.js')
router.get('/article',article.getArticles);
module.exports = router;