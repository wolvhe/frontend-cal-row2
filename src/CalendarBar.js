import React from 'react';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import "./calendarbar.css";

function CalendarBar() {
    // const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
    // const newValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);

    return (
        <div className="calendar_main">
            <div className="calendar_title">
            <h1>DASHBOARD</h1>
            </div>
            <div className="calendar_dates">
            <CalendarComponent 
            // value={dateValue} value={newValue}
            ></CalendarComponent>
            </div>
            
        
        </div>
    )
}

export default CalendarBar
