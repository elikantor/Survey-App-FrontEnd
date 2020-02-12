import React, { useReducer } from 'react'
import Question from './Question'

class CreateSurveyContainer extends React.Component {
  
    state = {
        name: "",
        questions: [],
        text: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    addQuestion = () => {
      let newState = [...this.state.questions, this.state.text]
      this.setState({
        questions: newState
      })
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    createSurvey = () => { 
      fetch("http://localhost:3000/surveys", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          // creator: user.id,
          name: this.state.name,
          questions: this.state.questions
        })
      })
    }
  render(){
    let questions = this.state.questions.map(q=> <Question question={q}/>)
    console.log(this.state.questions)
    return (
      <form onSubmit={this.handleSubmit} >
        Name Your Survey! <input type="text" name="name"  value={this.state.name} onChange={this.handleChange}/>
        <br></br>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.addQuestion}>Add Question</button>
        {questions}
        <br></br>
        <button onClick={this.createSurvey}>Create Survey</button>
      </form>
    )
  }
}

export default CreateSurveyContainer;


// create new inpout field for every click
// form will take evt.target to pass it back up 

// onClick={addInputField}

// addInputField = () => { 
  // <Question {div} />
// }