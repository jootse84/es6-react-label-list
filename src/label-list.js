import React, { Component, PropTypes } from 'react'
import Label from './label'
import '../styles/label-list.less'

export default class LabelList extends Component {
    constructor (props) {
        super(props)
        this.state ={
            labels: []
        }
    }

    keyPressHandler (e) {
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
        this.refs.labels.value.split(',').forEach((el) => {
            if (el.trim() && arr.indexOf(el.trim()) === -1) {
                arr.push(el.trim())
            }
        })
        this.refs.labels.value = ''
        this.setState({
            labels: arr
        })
        if (this.props.listUpdated) {
            this.props.listUpdated(arr)
        }
    }

    removeLabel (label) {
        const arr = this.state.labels.filter(function (el) {
            return el !== label
        })
        this.setState({
            labels: arr 
        })
        if (this.props.listUpdated) {
            this.props.listUpdated(arr)
        }
    }

    render () {
        const { placeholder, background, color, labelClicked } = this.props,
              deftext = "introduce your labels separated by comma, and press key enter"

        return (
            <div className="row">
                <input
                  type="text"
                  ref="labels"
                  placeholder={placeholder || deftext}
                  onKeyDown={this.keyPressHandler.bind(this)} />
                <div className="label-list">
                    {this.state.labels.map((element, i) => {
                        return (
                            <Label
                              removeLabel={this.removeLabel.bind(this)}
                              labelClicked={labelClicked}
                              background={background || 'white'}
                              color={color || 'black' }
                              key={'card' + i}
                              text={element} />
                        );
                    })}
                </div>
            </div>
        );
    }
}
