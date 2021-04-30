import './App.css';
import Nav from "./Nav.js";
import EventsBar from "./EventsBar";
import CalendarBar from './CalendarBar';
import ScheduledEvents from './ScheduledEvents';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/newevents">
      <ScheduledEvents/> 
      </Route>
      {/*  */}
      <Route path="/">
      <Nav/>
      <EventsBar/>
      <CalendarBar/>
      </Route>
      {/*  */}    
    </Switch>
    </div>
    </Router>
  );
}

export default App;
