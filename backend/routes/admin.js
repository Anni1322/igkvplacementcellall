const express = require('express');
const adminRouter = express.Router();
const adminController = require('../controller/adminController');

adminRouter.post('/update_by_adminVacancyApply',adminController.update_by_adminVacancyApply);

adminRouter.get('/VacancyApply',adminController.getVacancyApply);
adminRouter.get('/vacancies', adminController.getVacanciesDetils);
adminRouter.get('/getshortlist',adminController.getshortlist);
adminRouter.get('/getReject',adminController.getReject);
adminRouter.get('/getSelected',adminController.getSelected);

module.exports = adminRouter;