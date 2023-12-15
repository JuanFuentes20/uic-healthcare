import React from 'react';
import "./Instructions.css"

const Instructions = ({setShowInstructions}) => {

    const goToAppointmentForm = () => {
        setShowInstructions(prev => false)
    }
    return (
        <div className='wrapper'>
            <div className='instructions'>
                <header>Instructions for booking an appointment</header>
                <p>If you are using the service for the first time, please complete the health check form before making the appointment.</p>
                <p>If you’re unsure if you need to make a reservation, please contact our healthcare professionals in SelfChat first.</p>
                <p>If you can’t make it to your appointment, remember to reschedule or cancel it well in advance. Appointments should be canceled or rescheduled at least 24 hours before the time of the appointment.</p>
            </div>
            <button className='appointment large' onClick={goToAppointmentForm}>Appointment</button>
        </div>
    );
};

export default Instructions;