import React, { useState } from 'react';
import healthCareData from "../../healthCareData.json"
import "./Department.css"

const Department = ({appointmentForm, setAppointmentForm}) => {
    const [departmendIndex, setDepartmentIndex] = useState(appointmentForm.department)
    const departments = healthCareData.departments;
    const showDepartmentInfo = (idx) => {
        setDepartmentIndex(prev => idx)
        setAppointmentForm(prev => ({...prev, department: idx}))
    }
    return (
        <div className='wrapper'>
        <header>Select the service :</header>
        <div className='box-container'>
            {departments.map((department, idx) => {
                return (
                    <div key={department.name} className={`box ${departmendIndex === idx && "active"}`} onClick={() => showDepartmentInfo(idx)}>{department.name}</div>
                )
            })}
        </div>
        <div className='box info'>
            <p>{departments[departmendIndex].info}</p>
        </div>
    </div>
    );
};

export default Department;