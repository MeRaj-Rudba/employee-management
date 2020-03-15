import React from 'react';
import './EmployeeList.css';

const EmployeeList = (props) => {
    const employeeList =props.employeeList;
    let total=0;
    for (let i = 0; i < employeeList.length; i++) {
        const newEmployee = employeeList[i];
        total= total + newEmployee.income;
        
    }
    

    const formatNumber = num =>{
        const precision = num.toFixed(2); 
        return Number(precision);
    }
    const grandTotal=formatNumber(total);


    return (
        <div className='employee-list-body'>
            <h1>Your Employee</h1>
            <div className='short-line' ></div>
            <h3>Hired: {employeeList.length}</h3>
            <br/>
            <h3>Total Salary: {grandTotal}</h3>
        </div>
    );
};

export default EmployeeList;