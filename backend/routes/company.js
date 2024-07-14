const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/companyController');


const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const bodyParser = require('body-parser');
companyRouter.use(bodyParser.json());
companyRouter.use(bodyParser.urlencoded({extended:true}))


//  Ensure the directory exists
// const uploadDir = path.join(__dirname, '../public/com');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }
 

companyRouter.use(express.static('public'));

companyRouter.post('/add_vacancy',companyController.addVacancy);

companyRouter.post('/getdata_update_vacancy',companyController.Updatejobdataget);

companyRouter.post('/update_vacancy', companyController.updateJob);

companyRouter.get('/vacancies', companyController.getVacanciesDetils);

companyRouter.post('/getdata_All_Company_id',companyController.getdata_All_Company_id);

// companyRouter.post('/getdata_student_list_by_Company_id',companyController);

// added by roshni
companyRouter.get('/', companyController.getAllCompany);

companyRouter.post('/registerCompany',companyController.registerCompany);

companyRouter.post('/getcompanyinformation',companyController.getcompanyinformation);




companyRouter.get('/companycategory', companyController.getCompany_category);

companyRouter.get('/companytype', companyController.getCompany_Type);

companyRouter.get('/state', companyController.getstate);

companyRouter.get('/district', companyController.getdistrict);

companyRouter.get('/block', companyController.getblock);



// companyRouter.post('/fileupload',upload.single('file'),companyController.fileupload);
// companyRouter.get('/fileupload',companyController.getfiles);











// another api 

//fileUploads
const upload = multer({   
  storage: multer.diskStorage({
    destination: function (req, file, cb) {  
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); 
    }
  }),
  limits: { fileSize: 10000000 }  
});

companyRouter.post('/uploadLogo', upload.single('Company_Logo_Url'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    return next("No file found");
  }
  res.json({ Company_Logo_Url: `/uploads/${req.file.filename}` });
});














// Broucher file end point 


companyRouter.post('/uploadBroucher',upload.single('Company_Broucher'),(req, resp,next) => {  //here user is the key for image which must be same in frotend(angular)
  const file = req.file;
  if(!file){
    return next("no file found")
  }    
  resp.json({Company_Broucher: `/uploads/${req.file.filename}`})
});















// Other File end piont

// companyRouter.post('/uploadOther',upload.single('Company_Other_Doc_Url'),(req, resp,next) => {   
// const file = req.file;
// if(!file){
//   return next("no file found")
// }
// resp.json({Company_Other_Doc_Url: `/other/images/${req.file.filename}`})
// });


companyRouter.post('/uploadOther', upload.single('Company_Other_Doc_Url'), (req, resp, next) => {
  const file = req.file;
  if (!file) {
    return next("no file found");
  }
  resp.json({ Company_Other_Doc_Url: `/other/images/${req.file.filename}` });
});







module.exports = companyRouter;