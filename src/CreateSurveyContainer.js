import React from 'react'
import Question from './Question'

class CreateSurveyContainer extends React.Component {
  
    state = {
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
        text: event.target.value
      })
    }

  render(){
    let questions = this.state.questions.map(q=> <Question question={q}/>)
    console.log(this.state.questions)
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="question" value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.addQuestion}>Add a Question</button>
        {questions}
      </form>
    )
  }

}

export default CreateSurveyContainer;