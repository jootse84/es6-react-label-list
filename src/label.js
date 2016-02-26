import React, { Component, PropTypes } from 'react'
import '../styles/label.css'

export default class Label extends Component {

    constructor (props) {
        super(props);
        this.state = {
            hoverText: false,
            hoverCross: false
        };
        this.removeLabel = this.removeLabel.bind(this)
        this.hoverText = this.hoverText.bind(this)
        this.hoverCross = this.hoverCross.bind(this)
    }

    removeLabel () {
        this.props.removeLabel(this.props.text)
    }

    hoverText (e) {
        this.setState({hoverText: !this.state.hoverText});
    }
    
    hoverCross (e) {
        this.setState({hoverCross: !this.state.hoverCross});
    }


    render () {
        const { hoverText,
                hoverCross } = this.state,
              { background,
                color } = this.props,
              ticketStyle = {
                'background': this.props.background,
                'color': this.props.color
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
                    onMouseEnter={this.hoverText} 
                    onMouseLeave={this.hoverText} >
                    {this.props.text}
                </span>
                <a 
                    style={crossStyle}
                    onClick={this.removeLabel.bind(this)}
                    onMouseEnter={this.hoverCross} 
                    onMouseLeave={this.hoverCross} >
                    x
                </a>
            </div>
        );
    }
}
