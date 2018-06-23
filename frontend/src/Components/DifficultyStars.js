import React, { Component } from 'react';
import Star from 'material-ui/svg-icons/toggle/star';
import {lightGreen600} from 'material-ui/styles/colors';

let difficultyColor = {
    1: lightGreen600,
    2: "green",
    3: "orange",
    4: "red",
    5: "black"
};


let Stars = (props) => {
    let stars = [...Array(props.number)].map((e, i) => <Star {...props} />);
    return stars;
};

let DifficultyStars = (props) => {
    let task = props.task;
    return <Stars {...props} number={task.difficulty}
    color={difficultyColor[task.difficulty]} />;
};

export default DifficultyStars;
