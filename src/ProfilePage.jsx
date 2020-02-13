import React, { Component } from 'react';

class ProfilePage extends Component {

  render() {
    console.log(this.props)
    let {survey_creator:{surveys, username}} = this.props

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Surveys {username} Has Created</h3>

        <ol>
          {surveys.map(survey => <li onClick={()=>this.props.renderSurvey(survey)} key={survey.id}>{survey.name}</li>)}
        </ol>

      </div>
    );
  }
}
export default ProfilePage