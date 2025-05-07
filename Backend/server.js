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

app.get('/', (req, res) => {
    return res.json("Connection established to the server")
})


// fetching all course materials
app.get('/course-materials', (req, res) => {
    const sql = "SELECT s.student_name, sm.course_code, sm.faculty_initial, sm.note_link, sm.date_created, sm.last_updated FROM students s JOIN study_materials sm ON s.student_id = sm.student_id"

    database.query(sql, (error, data) => {
        if (error) {
            return res.json(error)
        }
        else {
            return res.json(data)
        }
    })
})

// add notes
app.post('/course-materials/add', (req, res) => {
    const { studentID, courseCode, facultyIni, noteLink, today, dateUpdated } = req.body;

    const sql = `INSERT INTO study_materials (student_id, course_code, faculty_initial, note_link, date_created, last_updated) VALUES (?, ?, ?, ?, ?, ?)`;


    database.query(sql, [studentID, courseCode, facultyIni, noteLink, today, dateUpdated], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }

        res.status(200).json({ message: 'Data inserted successfully', id: result.insertId });
    });
});





// fetching student info
app.get('/student-info', (req, res) => {
    const studentId = req.query.student_id;

    const sql = "SELECT * FROM students WHERE student_id = ?";
    database.query(sql, [studentId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(result[0]); // return the student data
    });
});


// changing password

app.post("/change-password", (req, res) => {
    const { user, newPassword } = req.body;

    const sql = "UPDATE students SET password = ? WHERE student_id = ?";
    database.query(sql, [newPassword, user], (err, result) => {
        if (err) {
            console.error("Error updating password:", err);
            return res.json({ success: false });
        }
        return res.json({ success: true });
    });
});

// student contribution

app.get('/student-contribution', (req, res) => {
    const studentId = req.query.student_id;

    const sql = "SELECT * FROM study_materials WHERE student_id = ?";
    database.query(sql, [studentId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ error : "Materials not found" });
        }

        res.json(result);
    });
});

// deleting notes

app.delete('/api/study-material', (req, res) => {
    const { student_id, course_code, faculty_initial } = req.body;

    const sql = `
        DELETE FROM study_materials 
        WHERE student_id = ? AND course_code = ? AND faculty_initial = ?
    `;

    database.query(sql, [student_id, course_code, faculty_initial], (err, result) => {
        if (err) {
            console.error('Error deleting study material:', err);
            return res.status(500).json({ message: 'Failed to delete study material.' });
        }

        res.status(200).json({ message: 'Study material deleted successfully.' });
    });
});


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