const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/companyController');


const multer = require('multer');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
companyRouter.use(bodyParser.json());
companyRouter.use(bodyParser.urlencoded({extended:true}))

//  Ensure the directory exists
// const uploadDir = path.join(__dirname, '../public/com');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }
 

companyRouter.use(express.static('public'));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/resumes');
//     },
//     filename: function (req, file, cb) {
//         // const name = Date.now() + '-' + file.originalname;
//         const name = Date.now() + path.extname(file.originalname);
//         cb(null, name);
//     }
// });

// const upload = multer({ storage: storage });

// doa
const upload = multer({    
    storage: multer.diskStorage({
      destination: function (req, file, cb) {    
        cb(null, "uploads");  
      },
      filename: function (req, file, cb) {
        cb(null, Date.now()+path.extname(file.originalname));  
      }
      
    }),
    // limits:{fileSize:10000000}   
  });     
// doa

 

// Endpoint to register a company
companyRouter.post('/registerCompany', upload.fields([
    { name: 'companyLogo', maxCount: 1 },
    { name: 'companyBroucher', maxCount: 1 },
    { name: 'companyOtherDoc', maxCount: 1 }
]), companyController.registerCompany);



// companyRouter.post('/postCompanyDetails', upload.single('companyLogo'), upload.single('companyBroucher'), upload.single('companyOtherDoc'), companyController.registerCompany);





companyRouter.post('/add_vacancy',companyController.addVacancy);

companyRouter.post('/getdata_update_vacancy',companyController.Updatejobdataget);

companyRouter.post('/update_vacancy', companyController.updateJob);

companyRouter.get('/vacancies', companyController.getVacanciesDetils);
companyRouter.post('/getdata_All_Company_id',companyController.getdata_All_Company_id);

// added by roshni
companyRouter.get('/', companyController.getAllCompany);


//companyRouter.post('/getdata_update_vacancyNext', companyController.UpdateNextjobdataget);


// companyRouter.post('/registerCompany', 
// upload.fields([
//     { name: 'Company_Logo_Url', maxCount: 1 },
//     { name: 'Company_Logo', maxCount: 1 },
//     { name: 'Company_Broucher', maxCount: 1 },
//     { name: 'Company_Other_Doc_Url', maxCount: 1 }
// ]), companyController.registerCompany);

companyRouter.post('/getcompanyinformation',companyController.getcompanyinformation);




companyRouter.get('/companycategory', companyController.getCompany_category);

companyRouter.get('/companytype', companyController.getCompany_Type);

companyRouter.get('/state', companyController.getstate);

companyRouter.get('/district', companyController.getdistrict);

companyRouter.get('/block', companyController.getblock);



companyRouter.post('/fileupload',upload.single('file'),companyController.fileupload);
companyRouter.get('/fileupload',companyController.getfiles);











// another api 
       
// Logog File End point
companyRouter.post('/uploadLogo',upload.single('Company_Logo_Url'),companyController.uploadLogo);
companyRouter.post('/uploadBroucher',upload.single('Company_Logo_Url'),companyController.uploadBroucher);
companyRouter.post('/uploadOtherDoc',upload.single('Company_Logo_Url'),companyController.uploadOtherDoc);


// another api  



module.exports = companyRouter;