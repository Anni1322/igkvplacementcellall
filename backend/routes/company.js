const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/companyController');

companyRouter.post('/add_vacancy',companyController.addjob);

companyRouter.post('/getdata_update_vacancy',companyController.Updatejobdataget);
companyRouter.post('/update_vacancy', companyController.updateJob);

companyRouter.get('/vacancies', companyController.getVacanciesDetils);



module.exports = companyRouter;