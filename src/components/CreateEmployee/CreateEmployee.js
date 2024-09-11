import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CreateEmployee.css';
import CustomModal from '../CustomModal/CustomModal';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleDateChange = (date, name) => {
    setEmployee({ ...employee, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.dateOfBirth.toDateString() === new Date().toDateString()) {
      alert('Birth date cannot be today.');
      return;
    }
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    savedEmployees.push(employee);
    localStorage.setItem('employees', JSON.stringify(savedEmployees));
    setModalIsOpen(true);
  };

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="container">
      <a href="/employee-list">View Current Employees</a>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={handleChange} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <DatePicker
          selected={employee.dateOfBirth}
          onChange={(date) => handleDateChange(date, 'dateOfBirth')}
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker selected={employee.startDate} onChange={(date) => handleDateChange(date, 'startDate')} />

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" onChange={handleChange} />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" onChange={handleChange} />

          <label htmlFor="state">State</label>
          <select id="state" name="state" onChange={handleChange}>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" name="zipCode" onChange={handleChange} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" name="department" onChange={handleChange}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <button type="submit">Save</button>
      </form>

      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h3>Employee Created!</h3>
      </CustomModal>
    </div>
  );
};

export default CreateEmployee;
