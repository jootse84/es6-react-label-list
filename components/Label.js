import React, { Component, PropTypes } from 'react'
import '../styles/Label.less'

export default class Label extends Component {
    removeLabel () {
        this.props.removeLabel(this.props.text)
    }

    render () {
        return (
            <div className="ticket">
                {this.props.text}&nbsp;
                <a onClick={this.removeLabel.bind(this)}>X</a>
            </div>
        );
    }
}
