import React from 'react';
import "./eventsbar.css";
import { Link } from 'react-router-dom';

function EventsBar() {
    return (
        <div className="events_main">
            <div>
                <div className="events_body">
                    <p className="events_brandtitle">My Appoinly</p>
                </div><br/>
                <div className="events_buttons"> 
                    <div className="events_button"><Link to="/newevents"><button type="button" class="btn btn-lg btn-primary">New Events</button></Link></div>
                    <div className="events_button"><button type="button" class="btn btn-lg btn-primary">Scheduled Events</button></div>
                </div>
                
            </div>
            <div className="events_create">
            <div className="create_button"><button type="button" class="btn btn-lg btn-success">Create +</button></div>
            </div>
                  
        </div>
    )
}

export default EventsBar
