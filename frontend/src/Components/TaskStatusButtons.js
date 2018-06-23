import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';
import Close from 'material-ui/svg-icons/navigation/close';


let rejectTask = (taskId) => {
    let url = 'http://localhost:8000/api/v1/tasks/' + taskId + '/reject';
    fetch(url, {method: "POST"});
};

let completeTask = (taskId) => {
    let url = 'http://localhost:8000/api/v1/tasks/' + taskId + '/complete';
    fetch(url, {method: "POST"});
};


let TaskStatusButtons = (props) => {
    return(
            <div {...props}>
            <RaisedButton backgroundColor="red"
        onClick={() => rejectTask(props.taskId)}
    icon={<Close color='white'/>} />
        <RaisedButton backgroundColor="#a4c639"
        onClick={() => completeTask(props.taskId)}
    icon={<Check color='white'/>} />
            </div>
    )
};

export default TaskStatusButtons;
