import React, { Component, PropTypes } from 'react'
import Label from './Label'
import '../styles/LabelList.less'

export default class LabelList extends Component {
    constructor (props) {
        super(props)
        this.state ={
            labels: []
        }
    }

    handleKeyPress (e) {
        if (e.charCode == 13) {
            this.addLabel();
        } else {
            if (e.keyCode == 13) {
                this.addLabel();
            }
        }
    }

    addLabel () {
        var arr = this.state.labels.slice()
        this.refs.labels.value.split(',').forEach(function (el) {
            arr.push(el.trim())
        })
        this.refs.labels.value = ''
        this.setState({
            labels: arr
        })
    }

    removeLabel (label) {
        this.setState({
            labels: this.state.labels.filter(function (el) {
                return el !== label
            })
        })
    }

    render () {
        return (
            <div className="row">
                <input
                  type="text"
                  ref="labels"
                  placeholder="introduce your labels separated by colon, and press key enter"
                  onKeyPress={this.handleKeyPress.bind(this)} />
                <div className="label-list">
                    {this.state.labels.map((element, i) => {
                        return (
                            <Label
                              removeLabel={this.removeLabel.bind(this)}
                              background={this.props.background || '#8dc63f'}
                              color={this.props.color || 'black'}
                              key={'card' + i}
                              text={element} />
                        );
                    })}
                </div>
            </div>
        );
    }
}
