const  { Router } = require('express');
const { createPost } = require('../controllers');

const router = Router();

router.get('/', createPost);


module.exports = router;