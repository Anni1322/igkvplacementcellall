const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/companyController');

companyRouter.post('/add_vacancy',companyController.addjob);
companyRouter.get('/vacancies', companyController.getJobs);


module.exports = companyRouter;