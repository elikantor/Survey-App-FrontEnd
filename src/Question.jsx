import React, { PureComponent } from 'react'

class Question extends PureComponent {


    render() {
        return (
            <div>
                Survey Question-
                {/* <input type="text" name="text" > </input> */}
                {this.props.question}
            </div>
        )
    }
}

export default Question