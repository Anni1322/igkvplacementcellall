// controller.js
const Database = require('./model');

class Controller {
  constructor(database) {
    this.database = database;
  }

  async getAllStudents() {
    const studentsCollection = this.database.getCollection('Students');
    return await studentsCollection.find({}).toArray();
  }

  // Additional controller methods can be added here
}

module.exports = Controller;
