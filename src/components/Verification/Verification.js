import React from 'react';
import "./Verification.css"

const Verification = ({appointmentForm}) => {
    return (
        <div className='wrapper centered verification'>
            <h1>You have successfully book the appointment!</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <path d="M16.5 31L28.9286 41.3571L45.5 20.6429M31 60C14.9837 60 2 47.0163 2 31C2 14.9837 14.9837 2 31 2C47.0163 2 60 14.9837 60 31C60 47.0163 47.0163 60 31 60Z" stroke="#26BF00" strokeWidth="3"/>
            </svg>
            <div className='box large-light summary'>
            <p><b>Location:</b> {appointmentForm.institution[0]?.label || '-'}</p>
            <p><b>Date:</b> {appointmentForm.formattedAppointmentDate || '-'}</p>
            <p><b>Time:</b> {appointmentForm.appointmentTime[0]?.label || '-'}</p>
            <p><b>Doctor:</b> {appointmentForm.doctor[0]?.label || '-'}</p>
        </div>
        </div>
    );
};

export default Verification;