import React from 'react';
import { Table } from 'react-bootstrap';

const StudentTable = ({ students }) => (
  <Table striped bordered className='bg-info' >
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Other Data</th>
      </tr>
    </thead>
    <tbody className='text-light'>
      {students.map(student => (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.username}</td>
          <td>{student.password}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default StudentTable;
