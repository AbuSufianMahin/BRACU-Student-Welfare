import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
// const port = 8081;

app.use(cors());
app.use(bodyParser.json());

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bracu_student_welfare'
})


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    return res.json("Connection established to the server")
})


// fetching all course materials
app.get('/course-materials', (req, res) => {
    const sql = "SELECT * FROM study_materials";

    database.query(sql, (error, data) => {
        if (error) {
            return res.json(error)
        }
        else {
            return res.json(data)
        }
    })
})



// fetching all student
app.get('/student', (req, res) => {
    const sql = "SELECT * FROM students";

    database.query(sql, (error, data) => {
        if (error) {
            return res.json(error)
        }
        else {
            return res.json(data)
        }
    })
})



// adding students
app.post('/student', (req, res) => {
    const { studentName, studentID, department, gsuite, password } = req.body;

    const sql = `INSERT INTO students (student_name, student_id, dept, gsuite, password)
                 VALUES (?, ?, ?, ?, ?)`;


    database.query(sql, [studentName, studentID, department, gsuite, password], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }

        res.status(200).json({ message: 'Data inserted successfully', id: result.insertId });
    });
});

// student Login (fetching)
app.post('/student/login', (req, res) => {
    const { gsuite, password } = req.body;

    const sql = "SELECT * FROM students WHERE gsuite = ? AND password = ?";
    database.query(sql, [gsuite, password], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid gsuite or password" });
        }

        // Login successful
        return res.status(200).json({ message: "Login successful", student: results[0] });
    });
});



app.listen(8081, () => console.log("Connection established to the server"))




