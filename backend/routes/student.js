const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/', studentController.getAllStudents);
router.get('/student', studentController.getStudents);

router.post('/registration', studentController.registerStudent);
// router.post('/', studentController.registration);
// router.post('/apply', studentController.getAllStudents);

router.get('/student_List', studentController.getAllStudents);

router.post('/signup',studentController.Signup);
router.post('/login',studentController.login);





// router.post('/add', studentController.postAddstudent);
// router.get('/edit/:id', studentController.getEditstudent);
// router.post('/edit/:id', studentController.postEditstudent);
// router.get('/delete/:id', studentController.deletestudent);

module.exports = router;
