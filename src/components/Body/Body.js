import React, { useState } from 'react';
import './Body.css';
import Employee from '../Employee/Employee';
import EmployeeList from '../EmployeeList/EmployeeList';
import dummyData from '../../dummyData';

const Body = () => {
    const first10=dummyData.slice(0,15);
    const [employee,setEmployee]=useState(first10);
    const [employeeList,setEmployeeList]=useState([]);

    const handleAddEmployee = (employee) => {
        console.log('Employee added',employee);
        const newEmployee=[...employeeList,employee];
        setEmployeeList(newEmployee);
        
    }



    return (
        <div className='main-body'>
            <div className="employee">
            {
                employee.map(emp => <Employee
                    handleAddEmployee={handleAddEmployee}
                    employee={emp}
                    ></Employee> )

            }

            </div>


            <div className="employee-list">
                <EmployeeList employeeList={employeeList} ></EmployeeList>
                
            </div>
        </div>
    );
};

export default Body;