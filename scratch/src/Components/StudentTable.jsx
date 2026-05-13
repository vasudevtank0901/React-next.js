import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
  firstname: "",
    lastname: "",
    rollno: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      id: "",
      firstname: "",
      lastname: "",
      rollno: "",
      course: ""
    });
  };
  return (
    <div className="container">
      <h2>Student Form</h2>
      <form className="form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rollno"
          placeholder="Roll No"
          value={formData.rollno}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
      <h3>Student Table</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll No</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.id}</td>
              <td>{s.firstname}</td>
              <td>{s.lastname}</td>
              <td>{s.rollno}</td>
              <td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Student Details</h3>

      <ul className="details">
        {students.map((s, index) => (
          <li key={index}>
            {s.firstname} {s.lastname} - Roll No: {s.rollno} - {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default StudentForm;
