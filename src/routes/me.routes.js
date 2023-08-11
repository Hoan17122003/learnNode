const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');
const meController = require('../app/controllers/MeController');


router.get('/stored/course', meController.storedCourse);
// router.post('/stored/course/:id', courseController.destroy);
router.get('/trash/course', meController.trashCourse);

module.exports = router;