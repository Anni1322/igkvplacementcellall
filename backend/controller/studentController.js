// controller.js
const Student = require('../model/studentModel');
const bcrypt = require('bcrypt');
const sql = require('../config/db');



// function generateEmpId(empNum) {
//     // Format empNum to have leading zeros if necessary
//     const paddedEmpNum = empNum.toString().padStart(2, '0');
//     // Concatenate 'igkv' with paddedEmpNum
//     const empId = 'igkv' + paddedEmpNum; 
//     return empId;
// }

// // Example usage:
// const empNum = 1;
// const empId = generateEmpId(empNum);
// console.log(empId); // Output: igkv01




//  jwt token use 
const login = async (req, res) => {
    const { username , password } = req.body;
    console.log(username,password);
    try {
        const request = new sql.Request();
        const usernameCheckQuery = 'SELECT id, username, password FROM dbo.login_table WHERE username = @username';
        request.input('username', sql.VarChar, username);
        request.input('password', sql.VarChar, password);  

        const result = await request.query(usernameCheckQuery);

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            // Compare the passwords
            if (user.password === password) {
                // Password matches, return success along with username and id
                return res.status(200).json({ 
                    id: user.id, 
                    username: user.username, 
                    message: 'Username login successful' 
                });
            } else {
                // Password does not match
                return res.status(400).json({ error: 'Incorrect password' });
            }
        } else {
            // Username does not exist
            return res.status(400).json({ error: 'Username does not exist' });
        }
    } catch (error) {
        console.error('Error checking Username existence in SQL Server: ', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


// for Signup
// Define the generateEmpId function
function generateEmpId(empNum) {
    // Format empNum to have leading zeros if necessary
    const paddedEmpNum = empNum.toString().padStart(2, '0');
    // Concatenate 'igkv' with paddedEmpNum
    const empId = 'igkv' + paddedEmpNum;
    return empId;
}

const Signup = async (req, res) => {
    // Access the request body
    const { username, password } = req.body;
    console.log("Data=>", username, password );
     
    // Validate required fields
    if (!username || !password  ) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const request = new sql.Request();
    const usernameCheckQuery = 'SELECT COUNT(*) AS count FROM dbo.login_table WHERE username = @username';
    request.input('username', sql.VarChar, username);

    request.query(usernameCheckQuery, (err, result) => {
        if (err) {
            console.error('Error checking Username existence in SQL Server: ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        // If count is greater than 0, username exists
        if (result.recordset[0].count > 0) {
            // Username exists, return an error
            return res.status(400).json({ error: 'Username already exists' });
        } else {

            // const query = 'SELECT MAX(id) AS max_emp_id FROM dbo.login_table;';
            // // const query = 'SELECT TOP 1 id FROM dbo.login_table ORDER BY id DESC';
            // request.query(query, (err, result) => {
            //     if (err) {
            //         console.error('Error retrieving largest id: ', err);
            //     } else {
            //         // Access the max_emp_id value from the result
            //         const maxEmpId = result.recordset[0].max_emp_id;
             
            //         // Increment the largest id by 1
            //         const newId = maxEmpId + 1;
            //         console.log('New id:', newId);
            //     }
            // });
             
            // const empId = generateEmpId(id);
            // console.log(empId)

            const insertQuery = 'INSERT INTO dbo.login_table (username, password) VALUES (@username, @password)';
            request.input('password', sql.VarChar, password); // assuming password is stored as a string
            // request.input('Emp_Id', sql.VarChar, empId);

            request.query(insertQuery, (err, results) => {
                if (err) {
                    console.error('Error inserting into SQL Server: ', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                // Handle successful insertion
                res.status(200).json({ message: 'User registered successfully' });
            });
        }
    });
};





// const nodemailer = require('nodemailer');

const postAllStudents = async(req, res)=>{
    try{  
        const email = req.body.email;
        const existmail = await Student.findOne({email: email });
        if (existmail) {
            // alert('This Email Allready exist');
            res.render('login',{message:'This Email Allready exist '});
        } else {
            
        // const spassword = await securePassword(req.body.password);
        const student = new Student({
            name:req.body.name,
            email:req.body.email,
            dob:req.body.dob,
            gender:req.body.gender,
            mobile:req.body.mobile,
            address:req.body.address,
            // image:req.file.filename,
            password:password,
            // password:spassword,
            is_admin:0,
        });

        const studentData = await student.save();
        if(studentData){
            // sendvarifyMail(req.body.name, req.body.email, userData._id);
            res.render('login',{message:'Your registration has been successflly, Please varify your email'})
        }else{
            res.render('registration',{message:'Your registration has been failed'})
        }
    }
     }catch(error){
         console.log(error.message)
     }
}


// for adnroid
const getStudents = async(req, res)=>{
    var request = new sql.Request();
    var query = "SELECT * FROM dbo.students";

    // Execute the SQL query
    request.query(query, function(err, records) {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error executing the query' });
            return;
        }
        // Send the fetched records as JSON response
        res.json(records.recordset);
    });
}




const getAllStudents = async(req, res)=>{
    var request = new sql.Request();
    var query = "SELECT * FROM dbo.student_registration";

    // Execute the SQL query
    request.query(query, function(err, records) {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error executing the query' });
            return;
        }
        // Send the fetched records as JSON response
        res.json(records.recordset);
    });
}




// const registerStudent = async (req, res) => {
//     // Access the request body
//     const { name, email, age, gender } = req.body;

//     console.log("Data=>", name, email, age, gender);
    
//     // Validate required fields
//     if (!name || !email || !age || !gender ) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }
    
//     // Create a new request object
//     const request = new sql.Request();
    
//     // SQL query to check if the email exists in the students table
//     const emailCheckQuery = 'SELECT COUNT(*) AS count FROM dbo.students WHERE email = @email';
//     request.input('email', sql.VarChar, email);

//     request.query(emailCheckQuery, (err, result) => {
//         if (err) {
//             console.error('Error checking email existence in SQL Server: ', err);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }

//         // If count is greater than 0, email exists
//         if (result.recordset[0].count > 0) {
//             // Email exists, return an error
//             return res.status(400).json({ error: 'Email already exists' });
//         } else {
//             // Email doesn't exist, proceed with inserting data
//             // Insert data into SQL Server
//             const insertQuery = 'INSERT INTO dbo.students (name, email, age, gender) VALUES (@name, @email, @age, @gender)';
//             request.input('name', sql.VarChar, name);
//             request.input('age', sql.Int, age);
//             request.input('gender', sql.VarChar, gender);

//             request.query(insertQuery, (err, results) => {
//                 if (err) {
//                     console.error('Error inserting into SQL Server: ', err);
//                     return res.status(500).json({ error: 'Internal Server Error' });
//                 }
//                 // Handle successful insertion
//                 res.status(200).json({ message: 'Student registered successfully' });
//             });
//         }
//     });
// };



const { insertQuery } = require('./queries');

const registerStudent = async (req, res) => {
    // Access the request body
    const {
        UE_ID,
        Registration_Type,
        Salutation_E,
        Salutation_H,
        Student_First_Name_E,
        Student_Middle_Name_E,
        Student_Last_Name_E,
        Student_First_Name_H,
        Student_Middle_Name_H,
        Student_Last_Name_H,
        DOB,
        Gender_Id,
        Mobile_No,
        Email_Id,
        Father_Name_E,
        Mother_Name_E,
        Father_Name_H,
        Mother_Name_H,
        Guardian_Name_E,
        Spouse_Name_E,
        Created_By,
        Created_Date,
        Modified_By,
        Modified_Date,
        Delete_Flag,
        Public_IP_Address,
        Private_IP_Address    
    } = req.body;
    
    // Validate required fields
    // if (!name || !email || !age || !gender ) {
    //     return res.status(400).json({ error: 'All fields are required' });
    // }
    
    // Create a new request object
    const request = new sql.Request();
    
    // SQL query to check if the email exists in the students table
    const emailCheckQuery = 'SELECT COUNT(*) AS count FROM dbo.student_registration WHERE Email_Id = @Email_Id';
    request.input('Email_Id', sql.VarChar(50), Email_Id);

    request.query(emailCheckQuery, (err, result) => {
        if (err) {
            console.error('Error checking email existence in SQL Server: ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // If count is greater than 0, email exists
        if (result.recordset[0].count > 0) {
            // Email exists, return an error
            return res.status(400).json({ error: 'Email already exists' });
        } else {
            // Email doesn't exist, proceed with inserting data
            
            // Insert data into SQL Server
            const insertQuery = `INSERT INTO dbo.student_registration (
                    UE_ID,
                    Registration_Type,
                    Salutation_E,
                    Salutation_H,
                    Student_First_Name_E,
                    Student_Middle_Name_E,
                    Student_Last_Name_E,
                    Student_First_Name_H,
                    Student_Middle_Name_H,
                    Student_Last_Name_H,
                    DOB,
                    Gender_Id,
                    Mobile_No,
                    Email_Id,
                    Father_Name_E,
                    Mother_Name_E,
                    Father_Name_H,
                    Mother_Name_H,
                    Guardian_Name_E,
                    Spouse_Name_E,
                    Created_By,
                    Created_Date,
                    Modified_By,
                    Modified_Date,
                    Delete_Flag,
                    Public_IP_Address,
                    Private_IP_Address
                ) VALUES (
                    @UE_ID,
                    @Registration_Type,
                    @Salutation_E,
                    @Salutation_H,
                    @Student_First_Name_E,
                    @Student_Middle_Name_E,
                    @Student_Last_Name_E,
                    @Student_First_Name_H,
                    @Student_Middle_Name_H,
                    @Student_Last_Name_H,
                    @DOB,
                    @Gender_Id,
                    @Mobile_No,
                    @Email_Id,
                    @Father_Name_E,
                    @Mother_Name_E,
                    @Father_Name_H,
                    @Mother_Name_H,
                    @Guardian_Name_E,
                    @Spouse_Name_E,
                    @Created_By,
                    @Created_Date,
                    @Modified_By,
                    @Modified_Date,
                    @Delete_Flag,
                    @Public_IP_Address,
                    @Private_IP_Address
                )`;
                    request.input('UE_ID', sql.BigInt, UE_ID);
                    request.input('Registration_Type', sql.Char, Registration_Type);
                    request.input('Salutation_E', sql.TinyInt, Salutation_E);
                    request.input('Salutation_H', sql.TinyInt, Salutation_H);
                    request.input('Student_First_Name_E', sql.VarChar(50), Student_First_Name_E);
                    request.input('Student_Middle_Name_E', sql.VarChar(50), Student_Middle_Name_E);
                    request.input('Student_Last_Name_E', sql.VarChar(50), Student_Last_Name_E);
                    request.input('Student_First_Name_H', sql.VarChar(50), Student_First_Name_H);
                    request.input('Student_Middle_Name_H', sql.VarChar(50), Student_Middle_Name_H);
                    request.input('Student_Last_Name_H', sql.VarChar(50), Student_Last_Name_H);
                    request.input('DOB', sql.Date, DOB);
                    request.input('Gender_Id', sql.Char, Gender_Id);
                    request.input('Mobile_No', sql.VarChar(12), Mobile_No);
                   
                    request.input('Father_Name_E', sql.VarChar(50), Father_Name_E);
                    request.input('Mother_Name_E', sql.VarChar(50), Mother_Name_E);
                    request.input('Father_Name_H', sql.VarChar(50), Father_Name_H);
                    request.input('Mother_Name_H', sql.VarChar(50), Mother_Name_H);
                    request.input('Guardian_Name_E', sql.VarChar(50), Guardian_Name_E);
                    request.input('Spouse_Name_E', sql.VarChar(50), Spouse_Name_E);
                    request.input('Created_By', sql.VarChar(20), Created_By);
                    request.input('Created_Date', sql.DateTime, Created_Date);
                    request.input('Modified_By', sql.VarChar(20), Modified_By);
                    request.input('Modified_Date', sql.DateTime, Modified_Date);
                    request.input('Delete_Flag', sql.Char, Delete_Flag);
                    request.input('Public_IP_Address', sql.VarChar(20), Public_IP_Address);
                    request.input('Private_IP_Address', sql.VarChar(20), Private_IP_Address);

            request.query(insertQuery, (err, results) => {
                if (err) {
                    console.error('Error inserting into SQL Server: ', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                // Handle successful insertion
                res.status(200).json({ message: 'Student registered successfully' });
            });
        }
    });
};


          
module.exports ={
    getAllStudents,
    registerStudent,
    Signup,
    login,
    getStudents
}
