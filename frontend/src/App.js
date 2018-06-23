import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Add from 'material-ui/svg-icons/content/add';
import EventNote from 'material-ui/svg-icons/notification/event-note';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import './App.css';
import TaskList from './TaskList/TaskList';
import NewTask from './NewTask/NewTask';
import TaskDetails from './TaskDetails/TaskDetails';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import RejectedTasks from './RejectedTasks/RejectedTasks';
import Kanban from './Kanban/Kanban';


class App extends Component {
  render() {
      return (
          <Router>
              <MuiThemeProvider>
            <div id="outer-container" className="App">
              <Menu outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" }>
              <EventNote color="white"
          style={{ width: "4em", height: "4em",
                   display: "block", margin: "auto", marginBottom: "30px" }}/>
              <NavLink id="home" className="menu-item" to="/">Lista zadań</NavLink>
              <NavLink id="home" className="menu-item" to="/completed-tasks">Wykonane zadania</NavLink>
              <NavLink id="home" className="menu-item" to="/rejected-tasks">Odrzucone zadania</NavLink>
              <NavLink id="new-task" className="menu-item" to='/new-task'>
              <FlatButton backgroundColor="#a4c639"
          icon={<Add className="svg-icon" color="black" />}
          label="Nowe zadanie" />

          </NavLink>
            </Menu>
            <div id="page-wrap">
        <header className="App-header">
              <EventNote color="white"
          style={{ width: "4em", height: "4em"}}/>
                 <h1 className="App-title">Yatda</h1>
              </header>
              <Paper id="content" style={{padding: 30}}>
                  <Route exact path="/" component={TaskList}/>
                  <Route path="/new-task" component={NewTask}/>
              <Route path="/tasks/:id" component={TaskDetails}/>
              <Route exact path="/completed-tasks" component={CompletedTasks}/>
              <Route exact path="/rejected-tasks" component={RejectedTasks}/>
              </Paper>
              <Route path="/kanban" component={Kanban}/>
            </div>
              </div>
              </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;
