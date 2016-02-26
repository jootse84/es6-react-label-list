'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

require('../styles/label-list.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelList = function (_Component) {
    _inherits(LabelList, _Component);

    function LabelList(props) {
        _classCallCheck(this, LabelList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LabelList).call(this, props));

        _this.state = {
            labels: []
        };
        return _this;
    }

    _createClass(LabelList, [{
        key: 'keyPressHandler',
        value: function keyPressHandler(e) {
            if (e.charCode == 13) {
                this.addLabel();
            } else {
                if (e.keyCode == 13) {
                    this.addLabel();
                }
            }
        }
    }, {
        key: 'addLabel',
        value: function addLabel() {
            var arr = this.state.labels.slice();
            this.refs.labels.value.split(',').forEach(function (el) {
                if (el.trim() && arr.indexOf(el.trim()) === -1) {
                    arr.push(el.trim());
                }
            });
            this.refs.labels.value = '';
            this.setState({
                labels: arr
            });
            if (this.props.listUpdated) {
                this.props.listUpdated(arr);
            }
        }
    }, {
        key: 'removeLabel',
        value: function removeLabel(label) {
            var arr = this.state.labels.filter(function (el) {
                return el !== label;
            });
            this.setState({
                labels: arr
            });
            if (this.props.listUpdated) {
                this.props.listUpdated(arr);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var placeholder = _props.placeholder;
            var background = _props.background;
            var color = _props.color;
            var labelClicked = _props.labelClicked;
            var deftext = "introduce your labels separated by comma, and press key enter";

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('input', {
                    type: 'text',
                    ref: 'labels',
                    placeholder: placeholder || deftext,
                    onKeyDown: this.keyPressHandler.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'label-list' },
                    this.state.labels.map(function (element, i) {
                        return _react2.default.createElement(_label2.default, {
                            removeLabel: _this2.removeLabel.bind(_this2),
                            labelClicked: labelClicked,
                            background: background || 'white',
                            color: color || 'black',
                            key: 'card' + i,
                            text: element });
                    })
                )
            );
        }
    }]);

    return LabelList;
}(_react.Component);

exports.default = LabelList;