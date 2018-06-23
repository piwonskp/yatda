import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {red100, green100, orange100, lightGreen600} from 'material-ui/styles/colors';
import DifficultyStars from '../Components/DifficultyStars';
import TaskStatusButtons from '../Components/TaskStatusButtons';


let priorityColors = {0: "green", 1: "orange", 2: "red"};

let backgroundPriority = {
    0: green100,
    1: orange100,
    2: red100
}

let difficultyCodeToText = {
    0: "Trywialny",
    1: "Łatwy",
    2: "Średni",
    3: "Trudny",
    4: "Awykonalny"
}


class TaskList extends Component {
    constructor (props) {
        super(props);
        this.state = {tasks: []};

        fetch('http://localhost:8000/api/v1/list-tasks',
              {method: "GET",
               headers: new Headers({
                    'Content-Type': 'application/json'
                })
              })
            .then((response) => response.json())
            .then((json) => this.setState({tasks: json}));
    }

    render_task(task){
        let difficultyStyle = {
            float: "right"
        };
        let divStyle = {
            //borderStyle: "solid",
            //borderColor: "black",
            //borderWidth: 1,
            overflow: "auto",
            borderRadius: 5,
            margin: 10,
            padding: 10,
            //backgroundColor: backgroundPriority[task.priority]
        };
        return (
                <div style={{textAlign: "left"}}>
                <a href={'/tasks/' + task.id}>
                <div style={divStyle}>
                <div><h3 style={{display: "inline-block"}}>
                {task.title}
            </h3>
                <div style={difficultyStyle}>
                <DifficultyStars task={task} />
            </div>
                </div>
                <TaskStatusButtons taskId={task.id}
            style={{float: "right"}} />
            </div></a>
                <Divider />
                </div>
        );
    }
  render() {
      return (
          <div>
              <AppBar title="Lista zadań">
              </AppBar>
              <ul>
              {this.state.tasks.map(this.render_task)}
              </ul>
          </div>

      );
  }
}

export default TaskList;
