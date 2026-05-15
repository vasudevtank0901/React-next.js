import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm() {

  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [rollno, setRollno] = useState("");
  const [course, setCourse] = useState("");

  const [students, setStudents] = useState([]);

  const addStudent = (e) => {
    e.preventDefault();

    const data = [id, firstname, lastname, rollno, course];
    setStudents([...students, data]);

    setId("");
    setFirstname("");
    setLastname("");
    setRollno("");
    setCourse("");
  };

  return (
    <div className="container">

      <h2>Student Form</h2>

      <form className="form" onSubmit={addStudent}>

        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      <h3>Student Table</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Roll No</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s[0]}</td>
              <td>{s[1]}</td>
              <td>{s[2]}</td>
              <td>{s[3]}</td>
              <td>{s[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
   <h3>Student Details</h3>

      <div className="details">
        {students.map((s, index) => (
          <p key={index}>
            {s[1]} {s[2]} - Roll No: {s[3]} - {s[4]}
          </p>
        ))}
      </div>

    </div>
  );
}

export default StudentForm;