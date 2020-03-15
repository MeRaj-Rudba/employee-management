import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Employee = (props) => {
    const {img,name,income,work}=props.employee;
    


    return (
        <div>
            <Card className="justify-content-center employee-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title className='title'>{name}</Card.Title>
                <Card.Text>
                    <p id='designation'> {work}</p>
                    <p id='salary'>Salary: ${income}</p>
                </Card.Text>
                <Button className='add-button' onClick = {() => props.handleAddEmployee(props.employee)}><FontAwesomeIcon icon={faPlus}/> Add Employee</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Employee;