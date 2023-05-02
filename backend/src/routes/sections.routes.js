const { Router } = require('express');
const { check } = require("express-validator");

// Middlewares
const { validateFields } = require('../middlewares');
// Helpers
// Controllers
const { 
    createSection, 
    getAllSections, 
    updateSection, 
    deleteSection  
} = require('../controllers');

const router = Router();

router.get('/', getAllSections)
router.post('/', createSection)
router.put('/:id', updateSection)
router.delete('/:id', deleteSection)


module.exports = router;