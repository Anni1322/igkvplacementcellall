const express = require('express');
const adminRouter = express.Router();
const adminController = require('../controller/adminController');

adminRouter.get('/VacancyApply',adminController.getVacancyApply);
adminRouter.post('/update_by_adminVacancyApply',adminController.update_by_adminVacancyApply);

adminRouter.get('/vacancies', adminController.getVacanciesDetils);

module.exports = adminRouter;