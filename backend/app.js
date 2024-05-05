const express = require('express');
const bodyParser = require('body-parser');
const studentRouter = require('./routes/student')
const sql = require('./config/db');
const cors = require('cors');
// morgun
// joy /- validation (query)



const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/student', studentRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
