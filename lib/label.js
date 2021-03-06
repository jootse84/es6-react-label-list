'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/label.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_Component) {
    _inherits(Label, _Component);

    function Label(props) {
        _classCallCheck(this, Label);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this, props));

        _this.state = {
            hoverText: false,
            hoverCross: false
        };
        _this.removeLabel = _this.removeLabel.bind(_this);
        _this.hoverTextHandler = _this.hoverTextHandler.bind(_this);
        _this.hoverCrossHandler = _this.hoverCrossHandler.bind(_this);
        return _this;
    }

    _createClass(Label, [{
        key: 'removeLabel',
        value: function removeLabel() {
            this.props.removeLabel(this.props.text);
        }
    }, {
        key: 'labelClicked',
        value: function labelClicked() {
            if (this.props.labelClicked) {
                this.props.labelClicked(this.props.text);
            }
        }
    }, {
        key: 'hoverTextHandler',
        value: function hoverTextHandler(e) {
            this.setState({
                hoverText: !this.state.hoverText
            });
        }
    }, {
        key: 'hoverCrossHandler',
        value: function hoverCrossHandler(e) {
            this.setState({
                hoverCross: !this.state.hoverCross
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state;
            var hoverText = _state.hoverText;
            var hoverCross = _state.hoverCross;
            var _props = this.props;
            var background = _props.background;
            var color = _props.color;
            var ticketStyle = {
                'background': background,
                'color': color
            };
            var crossStyle = {
                background: hoverCross ? color : background,
                color: hoverCross ? background : color
            };
            var textStyle = {
                background: hoverText ? color : background,
                color: hoverText ? background : color
            };

            return _react2.default.createElement(
                'div',
                {
                    className: 'ticket',
                    style: ticketStyle },
                _react2.default.createElement(
                    'span',
                    {
                        style: textStyle,
                        onClick: this.labelClicked.bind(this),
                        onMouseEnter: this.hoverTextHandler,
                        onMouseLeave: this.hoverTextHandler },
                    this.props.text
                ),
                _react2.default.createElement(
                    'a',
                    {
                        style: crossStyle,
                        onClick: this.removeLabel.bind(this),
                        onMouseEnter: this.hoverCrossHandler,
                        onMouseLeave: this.hoverCrossHandler },
                    'x'
                )
            );
        }
    }]);

    return Label;
}(_react.Component);

exports.default = Label;