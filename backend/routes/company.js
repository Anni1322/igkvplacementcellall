const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/companyController');


const multer = require('multer');
const path = require('path');
const fs = require('fs');
companyRouter.use(express.static('public'));
const bodyParser = require('body-parser');
companyRouter.use(bodyParser.json());
companyRouter.use(bodyParser.urlencoded({extended:true}))

//  Ensure the directory exists
const uploadDir = path.join(__dirname, '../public/company');
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


module.exports = companyRouter;