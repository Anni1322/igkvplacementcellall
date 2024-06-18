const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/companyController');

companyRouter.post('/add_vacancy',companyController.addjob);

companyRouter.post('/getdata_update_vacancy',companyController.Updatejobdataget);
companyRouter.post('/update_vacancy', companyController.updateJob);

companyRouter.get('/vacancies', companyController.getVacanciesDetils);

// added by roshni
companyRouter.get('/', companyController.getAllCompany);

companyRouter.post('/registration', companyController.registerCompany);

companyRouter.get('/companycategory', companyController.getCompany_category);

companyRouter.get('/companytype', companyController.getCompany_Type);

companyRouter.get('/state', companyController.getstate);

companyRouter.get('/district', companyController.getdistrict);

companyRouter.get('/block', companyController.getblock);


module.exports = companyRouter;