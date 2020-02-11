import React from 'react';
import CreateSurveyContainer from './CreateSurveyContainer'

class Home extends React.Component {

    state = {
        createSurvey: false
    }

    renderSurveyContainer = () => {
        let newState = !this.state.createSurvey
        this.setState({
            createSurvey: newState
        })
    }


  render(){
    return (
        <div>
            {/* {Logo} */}
            <button onClick={this.renderSurveyContainer}> Sign in to Create Survey </button>
            {!this.state.createSurvey ? null : <CreateSurveyContainer/>}
        </div>
    )
  }

}

export default Home;