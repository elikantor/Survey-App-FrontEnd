import React, { PureComponent } from 'react'

class Question extends PureComponent {

    render() {
        return (
            <div>
                {this.props.question}
            </div>
        )
    }
}

export default Question