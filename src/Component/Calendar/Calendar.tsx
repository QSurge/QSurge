import React from 'react';
import './Calendar.css'
interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const daysOfWeek: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const monthList: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const firstDayOfMonth: Date = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth: Date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth: number = lastDayOfMonth.getDate();
  const monthName: string = monthList[date.getMonth()];
  const year: number = date.getFullYear();

  const getCellStyle = (day: number): React.CSSProperties => {
    if (day === date.getDate()) {
      return {
     backgroundColor: '#839496',     
       padding:'4px',
       color:'#17282c'
    };
    }
    return {
      padding:'4px'
    };
  };

  return (
    <div className='Calendar'>
    <table id='calendar-table'>
      <thead>
        <tr>
          <th colSpan={7}>{monthName} {year}</th>
        </tr>
        <tr>
          {daysOfWeek.map(day => <th key={day}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth.getDay()) / 7) }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 7 }, (_, colIndex) => {
              const dayOfMonth = rowIndex * 7 + colIndex - firstDayOfMonth.getDay() + 1;
              const isWithinMonth = dayOfMonth >= 1 && dayOfMonth <= daysInMonth;
              const cellStyle = getCellStyle(dayOfMonth);
              return (
                <td key={colIndex} style={cellStyle}>
                  {isWithinMonth ? dayOfMonth : ''}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Calendar;
