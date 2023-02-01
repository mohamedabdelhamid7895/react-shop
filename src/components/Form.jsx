import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StudentTable from './StudentsTable';

const StudentForm = () => {
  const [students, setStudents] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');

    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
    }

    if (password.length < 5) {
      setPasswordError('Password must be at least 5 characters');
    }

    if (username.length >= 3 && password.length >= 5) {
      setStudents([...students, { id: students.length + 1, username, password }]);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className='bg-success text-light'>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Other Data</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </Form.Group>
        <Button className='mt-3 w-25' type="submit">Add</Button>
      </Form>
      <br></br>
      <StudentTable students={students} />
    </div>
  );
};

export default StudentForm;