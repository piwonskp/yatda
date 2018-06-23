
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Star from 'material-ui/svg-icons/toggle/star';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';
import {red100, green100, orange100, lightGreen600} from 'material-ui/styles/colors';
import DifficultyStars from '../Components/DifficultyStars';
import TaskStatusButtons from '../Components/TaskStatusButtons';


class TaskDetails extends Component {
    constructor (props) {
        super(props);
        let id = props.match.params.id;
        this.state = {id: id, title: '', description: '', priority: null, difficulty: null, status: ''};

        fetch('http://localhost:8000/api/v1/tasks/' + id,
              {method: "GET",
               headers: new Headers({
                   'Content-Type': 'application/json'
               })})
            .then((response) => response.json())
            .then((json) => this.setState({
                title: json.title,
                description: json.description,
                priority: json.priority,
                difficulty: json.difficulty,
                status: json.status
            }));
    }

  render() {
      let buttons = '';
      if(this.state.status == 'todo'){
          buttons = <TaskStatusButtons
          taskId={this.state.id}
          style={{float: "right"}} />
      }
      return (
              <div style={{overflow: "auto"}}>
              <AppBar title="Szczegóły zadania">
              </AppBar>
              <h3 style={{display: "inline-block"}}>
              {this.state.title}</h3>
              <DifficultyStars task={this.state} style={{float: 'right'}} />
              <Divider />
              <p>{this.state.description}</p>
              { buttons }
          </div>

      );
  }
}

export default TaskDetails;
