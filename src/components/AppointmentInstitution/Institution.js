import React from 'react';
import healthCareData from "../../healthCareData.json"
import Select from 'react-dropdown-select';
import "./Institution.css"

const Institution = ({appointmentForm, setAppointmentForm}) => {
    const institutions = healthCareData.institution;
    const options = institutions.map((institution, idx) => {
        return {value: idx + 1, label: institution}
    })
    return (
        <div className='wrapper'>
        <header>Select the service :</header>
        <div className='select-wrapper'>
        <Select className='custom-select' placeholder='-Select-' required options={options} values={appointmentForm.institution} onChange={(values) => setAppointmentForm(prev => ({...prev, institution: values}))} />
        </div>
        </div>
    );
};

export default Institution;