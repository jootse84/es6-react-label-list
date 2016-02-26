import React, { Component, PropTypes } from 'react'
import '../styles/label.less'

export default class Label extends Component {

    constructor (props) {
        super(props)
        this.state = {
            hoverText: false,
            hoverCross: false
        }
        this.removeLabel = this.removeLabel.bind(this)
        this.hoverTextHandler = this.hoverTextHandler.bind(this)
        this.hoverCrossHandler = this.hoverCrossHandler.bind(this)
    }

    removeLabel () {
        this.props.removeLabel(this.props.text)
    }

    labelClicked () {
        if (this.props.labelClicked) {
            this.props.labelClicked(this.props.text)
        }
    }

    hoverTextHandler (e) {
        this.setState({
            hoverText: !this.state.hoverText
        })
    }
    
    hoverCrossHandler (e) {
        this.setState({
            hoverCross: !this.state.hoverCross
        })
    }

    render () {
        const { hoverText, hoverCross } = this.state,
              { background, color } = this.props,
              ticketStyle = {
                  'background': background,
                  'color': color
              },
              crossStyle = {
                  background: hoverCross ? color : background,
                  color: hoverCross ? background : color
              },
              textStyle = {
                  background: hoverText ? color : background,
                  color: hoverText ? background : color
              }

        return (
            <div 
              className="ticket"
              style={ticketStyle}>
                <span 
                  style={textStyle}
                  onClick={this.labelClicked.bind(this)}
                  onMouseEnter={this.hoverTextHandler} 
                  onMouseLeave={this.hoverTextHandler}>
                    {this.props.text}
                </span>
                <a 
                  style={crossStyle}
                  onClick={this.removeLabel.bind(this)}
                  onMouseEnter={this.hoverCrossHandler} 
                  onMouseLeave={this.hoverCrossHandler}>
                    x
                </a>
            </div>
        )
    }
}
