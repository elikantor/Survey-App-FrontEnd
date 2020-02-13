import React, { Component } from 'react';
import Survey from './Survey'
// import NewSnackForm from './NewSnackForm'

class ProfilePage extends Component {

  render() {
      console.log(this.props)
    let {survey_creator:{surveys, username}} = this.props

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Surveys</h3>

        <ol>
          {surveys.map(survey => <Survey key={survey.id} survey={survey} />)}
        </ol>

      </div>
    );
  }
}
export default ProfilePage