const insertQuery = `INSERT INTO dbo.students (name, email, age, gender)
 VALUES (@name, @email, @age, @gender)`;

// Export the query as a module
module.exports = {
  insertQuery: insertQuery
};
