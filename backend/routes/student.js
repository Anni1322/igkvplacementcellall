const express = require('express');
const student_route = express();
const router = express.Router();
const studentController = require('../controller/studentController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');



// // Configure multer for file upload
// const upload = multer({ dest: 'uploads/' });
student_route.use(express.static('public'));
const bodyParser = require('body-parser');
student_route.use(bodyParser.json());
student_route.use(bodyParser.urlencoded({extended:true}))

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // cb(null,path.join(__dirname, '../public/images'))
//         cb(null, '../public/images/');
//     },
//     filename:function (req, file, cb) {
//         const name = Date.now()+'-'+file.originalname;
//         cb(null,name);
//     }
// })
// const upload = multer({storage:storage});

//  Ensure the directory exists
const uploadDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

const upload = multer({ storage: storage });








router.get('/captcha',studentController.captcha)




router.get('/', studentController.getAllStudents);
router.get('/student', studentController.getStudents);

router.post('/registration', studentController.registerStudent);
// router.post('/', studentController.registration);
// router.post('/apply', studentController.getAllStudents);

router.get('/student_List', studentController.getAllStudents);

router.post('/signup',studentController.Signup);











router.post('/login',studentController.login);

router.post('/search',studentController.Profile);



router.post('/getbasicdetails',studentController.getbasicdetails);

router.post('/postbasicdetails',studentController.postbasicdetails);




// for admin api 
router.get('/getVacancyApplyStudentDetails',studentController.getVacancyApplyStudentDetails);
router.post('/VacancyApplicationStudentDetail',studentController.VacancyApplicationStudentDetail);
router.post('/VacancyApply',upload.single('file'),studentController.VacancyApply);





 

// this api is return join data 
router.post('/getstudentdetails',studentController.getstudentdetails);


// router.get('/users',studentController.users);




// file upload
router.post('/upload',upload.single('photo'),studentController.uploadfile)


// this api is return gender table
router.get('/getGender',studentController.getGender);
router.get('/getSubjects',studentController.getSubjects);
router.get('/getDegree_type',studentController.getDegree_type);
router.get('/getDegree_program',studentController.getDegree_program);

//added by roshni
router.get('/salutationenglish', studentController.getSalutation_English);
router.get('/salutationhindi', studentController.getSalutation_Hindi);
router.get('/registrationtype', studentController.getRegistrationType);


// router.post('/add', studentController.postAddstudent);
// router.get('/edit/:id', studentController.getEditstudent);
// router.post('/edit/:id', studentController.postEditstudent);
// router.get('/delete/:id', studentController.deletestudent);

module.exports = router;
