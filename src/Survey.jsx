import React from 'react';

const Survey = (props) => {
  return(
    <li onClick={()=> props.fetchsurvey(props.survey)}>{props.survey.name}</li>
  )
};

export default Survey;