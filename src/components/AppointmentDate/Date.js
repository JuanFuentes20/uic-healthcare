import React, {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { format, isWeekend, isWednesday, isMonday, isFriday, isThursday } from 'date-fns';
import "./Date.css"

function customDayContent(day) {
    let extraDot = null;
    if (isWeekend(day)) {
      extraDot = (
        <div
          style={{
            height: "5px",
            width: "5px",
            borderRadius: "100%",
            background: "red",
            position: "absolute",
            bottom: 0,
            right: '50%',
            transform: 'translateX(50%)'
          }}
        />
      )
    }
    if (isMonday(day)) {
        extraDot = (
          <div
            style={{
              height: "5px",
              width: "5px",
              borderRadius: "100%",
              background: "blue",
              position: "absolute",
              bottom: 0,
              right: '50%',
              transform: 'translateX(50%)'
            }}
          />
        )
      }
      if (isWednesday(day)) {
        extraDot = (
          <div
            style={{
              height: "5px",
              width: "5px",
              borderRadius: "100%",
              background: "orange",
              position: "absolute",
              bottom: 0,
              right: '50%',
              transform: 'translateX(50%)'
            }}
          />
        )
      }
      if (isFriday(day) || isThursday(day)) {
        extraDot = (
          <div
            style={{
              height: "5px",
              width: "5px",
              borderRadius: "100%",
              background: "green",
              position: "absolute",
              bottom: 0,
              right: '50%',
              transform: 'translateX(50%)'
            }}
          />
        )
      }
    return (
      <div>
        {extraDot}
        <span>{format(day, "d")}</span>
      </div>
    )
  }

  function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
  }

  const formatDate = (date) => {
    const dayWithOrdinal = getOrdinalNum(date.getDate());
    const month = format(date, 'MMMM');
    const year = date.getFullYear();
  
    return `${dayWithOrdinal}, ${month}, ${year}`;
  };

const DatePicker = ({appointmentForm, setAppointmentForm}) => {
    const [date, setDate] = useState(appointmentForm.appointmentDate || new Date())
    const handleSelect = (date) => {
        setDate(prev => date)
        setAppointmentForm(prev => ({...prev, appointmentDate: date}))
        const formattedDate = formatDate(date)
        setAppointmentForm(prev => ({...prev, formattedAppointmentDate: formattedDate}))
    }

    return (
        <div className='wrapper'>
        <header>Select a date:</header>
        <div className='calendar-wrapper'>
            <Calendar
            date={date}
            minDate={new Date()}
            dayContentRenderer={customDayContent}
            onChange={(date) => handleSelect(date)}
        />
        </div>
        </div>
    );
};

export default DatePicker;