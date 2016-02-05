import React, { Component, PropTypes } from 'react'
import '../styles/Label.less'

export default class Label extends Component {
    removeLabel () {
        this.props.removeLabel(this.props.text)
    }

    render () {
        const ticketStyle = {
                'background': this.props.background
            },
            textStyle = {
                'color': this.props.color
            }

        return (
            <div className="ticket" style={ticketStyle}>
                <span style={textStyle}>{this.props.text}</span>&nbsp;
                <a onClick={this.removeLabel.bind(this)}>X</a>
            </div>
        );
    }
}
