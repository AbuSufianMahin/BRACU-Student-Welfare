import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
app.use(cors());
app.listen(8081, ()=> console.log("Connection established to the server"))


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

app.get('/course-materials', (req, res)=>{
    const sql = "SELECT * FROM study_materials";

    database.query(sql, (error, data)=>{
        if (error){
            return res.json(error)
        }
        else{
            return res.json(data)
        }
    })
})

// app.post('/add-notes', (req, res)=>{
//     const sql = "INSERT INTO study_materials (student_id, course_code, faculty_initial, note_link, date_created, last_updated) VALUES(?)";
//     const values = [


//         req.body.courseCode,
//         req.body.facultyIni,
//         req.body.noteLink,
//         req.body.today,
//         req.body.dateUpdated
//     ]
// })



