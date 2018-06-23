import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import {lightGreen600} from 'material-ui/styles/colors';
import StarRatingComponent from 'react-star-rating-component';
import './NewTask.css'


const styles = {
    radioButton: {
        margin: 16,
        width: "auto",
        display: "inline-block",
    },
    textField: {
        textAlign: "left",
    }
};


class NewTask extends Component {
    constructor (props) {
        super(props);
        this.state = {title: '', description: '',
                      priority: null, difficulty: null
                     };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleDifficulty = this.handleDifficulty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(event){
        this.setState({title: event.target.value});
    }
    handleDescription(event){
        this.setState({description: event.target.value});
    }
    handlePriority(event){
        this.setState({priority: event.target.value});
    }
    handleDifficulty(nextValue, prevValue, name){
        this.setState({difficulty: nextValue});
    }

    handleSubmit(event){
        let data = {title: this.state.title, description: this.state.description,
                      priority: this.state.priority, difficulty: this.state.difficulty
                     };
        fetch('http://localhost:8000/api/v1/new-task', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if(response.ok){
                    this.props.history.push('/');
                }
            });
    }

  render() {
      return (
              <form>
              <AppBar
    title="Dodawanie nowego zadania"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
              <TextField floatingLabelText="Tytuł" onChange={this.handleTitle}
          style={styles.textField} value={this.state.title}>
              </TextField> <br />
              <TextField floatingLabelText="Opis"multiLine={true} rows={3}
          onChange={this.handleDescription} style={styles.textField}
          value={this.state.description}>
              </TextField> <br />

              <Subheader>Priorytet</Subheader>
              <RadioButtonGroup name="priority" onChange={this.handlePriority}
          defaultSelected="not_light" value={this.state.priority}>
              <RadioButton
          value={0}
        label="Niski"
          style={styles.radioButton}
          iconStyle={{fill: "green"}}
              />
              <RadioButton
          value={1}
          label="Średni"
          style={styles.radioButton}
          iconStyle={{fill: "orange"}}
              />
              <RadioButton
          value={2}
          label="Wysoki"
          style={styles.radioButton}
          iconStyle={{fill: "red"}}
              />
              </RadioButtonGroup>


              <Subheader>Trudność</Subheader>
              <div>
              <StarRatingComponent name="difficulty"
          value={this.state.difficulty}
          onStarClick={this.handleDifficulty}
          />
              </div>

          {/*
              <RadioButtonGroup name="difficulty" defaultSelected="not_light"
          value={this.state.difficulty} onChange={this.handleDifficulty}>
              <RadioButton
          value={0}
          label="Trywialny"
          style={styles.radioButton}
          iconStyle={{fill: lightGreen600}}
              />
              <RadioButton
          value={1}
          label="Łatwy"
          style={styles.radioButton}
          iconStyle={{fill: "green"}}
              />
              <RadioButton
          value={2}
          label="Średni"
          style={styles.radioButton}
          iconStyle={{fill: "orange"}}
              />
              <RadioButton
          value={3}
          label="Trudny"
          style={styles.radioButton}
          iconStyle={{fill: "red"}}
              />
              <RadioButton
          value={4}
          label="Awykonalny"
          style={styles.radioButton}
          iconStyle={{fill: ""}}
              />
              </RadioButtonGroup>
           */}

              <FloatingActionButton onClick={this.handleSubmit}>
      <ContentAdd />
              </FloatingActionButton>
              </form>
      );
  }
}

export default NewTask;
