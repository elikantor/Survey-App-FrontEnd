import React, { Component } from 'react';
import Survey from './Survey'
import { Card, Image } from 'semantic-ui-react'
// import NewSnackForm from './NewSnackForm'

class ProfilePage extends Component {

  render() {
    console.log(this.props)
    let {survey_creator:{surveys, username}} = this.props

    return (

      <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
  <Card.Header>{username}</Card.Header>
        <Card.Meta>
           {username}'s Surveys 
        </Card.Meta>
        <Card.Description>
          {username} is a blogger living in NYC.
        </Card.Description>
      </Card.Content>
      {surveys.map(survey => <li onClick={()=>this.props.renderSurvey(survey)} key={survey.id}>{survey.name}</li>)}
    </Card>
    )
    }
  }
//       <div>
//         <h2>{username}&apos;s Profile</h2>
//         <h3>Surveys</h3>

//         <ol>
//           {surveys.map(survey => <Survey key={survey.id} survey={survey} />)}
//         </ol>

//       </div>
//     );
//   }
// }
export default ProfilePage