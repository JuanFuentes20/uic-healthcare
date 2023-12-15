import React from 'react';
import healthCareData from "../../healthCareData.json"
import Select from 'react-dropdown-select';
import "./GenerealInfo.css"

const GeneralInfo = ({appointmentForm, setAppointmentForm}) => {
    const doctors = healthCareData.doctors;
    const optionsDoc = doctors.map((doctor, idx) => {
        return {value: idx + 1, label: doctor}
    })

    const times = healthCareData.appointmentTimes
    const optionsTime = times.map((time, idx) => {
        return {value: idx + 1, label: time}
    })
    return (
        <div className='wrapper'>
        <div className='box large-light'>
            <p>{appointmentForm.formattedAppointmentDate}</p>
        </div>
        <header>Select the doctor:</header>
        <div className='select-wrapper'>
        <Select className='custom-select' searchable={false} placeholder='-Select-' required options={optionsDoc} values={appointmentForm.doctor} onChange={(values) => setAppointmentForm(prev => ({...prev, doctor: values}))} />
        </div>
        <header>Select the time:</header>
        <div className='select-wrapper'>
        <Select className='custom-select' searchable={false} placeholder='-Select-' required options={optionsTime} values={appointmentForm.appointmentTime} onChange={(values) => setAppointmentForm(prev => ({...prev, appointmentTime: values}))} />
        </div>
        </div>
    );
};

export default GeneralInfo;
