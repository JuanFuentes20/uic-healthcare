import React from 'react';
import "./Summary.css"

const Summary = ({appointmentForm}) => {
    return (
        <div className='wrapper'>
        <h2>Appointment Summary:</h2>
        <div className='box large-light summary'>
            <p><b>Location:</b> {appointmentForm.institution[0].label || '-'}</p>
            <p><b>Date:</b> {appointmentForm.formattedAppointmentDate || '-'}</p>
            <p><b>Time:</b> {appointmentForm.appointmentTime[0].label || '-'}</p>
            <p><b>Doctor:</b> {appointmentForm.doctor[0].label || '-'}</p>
        </div>
        <h2>Would you like to make the reservation ?</h2>
        </div>
    );
};

export default Summary;