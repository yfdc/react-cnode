webpackHotUpdate(0,{

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _Title = __webpack_require__(781);
	
	var _Title2 = _interopRequireDefault(_Title);
	
	var _actions = __webpack_require__(566);
	
	var _reactRedux = __webpack_require__(538);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Message = function (_React$Component) {
	    _inherits(Message, _React$Component);
	
	    function Message() {
	        _classCallCheck(this, Message);
	
	        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));
	
	        _this.displayName = "Message";
	        _this.title = "消息中心";
	        return _this;
	    }
	
	    _createClass(Message, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            console.log(this.props);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                value = _props.value,
	                add = _props.add;
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "p",
	                    { style: { width: "100%", height: "500px", textAlign: "center", lineHeight: 200 } },
	                    "\u8BF7\u5148\u767B\u5F55\uFF01\uFF01\uFF01"
	                )
	            );
	        }
	    }]);
	
	    return Message;
	}(_react2.default.Component);
	
	Message.propTypes = {
	    value: _react.PropTypes.number.isRequired,
	    add: _react.PropTypes.func.isRequired
	};
	//遍历redux的state到组件的props
	function mapStateToProps(state) {
	    return {
	        value: state.message.count
	    };
	}
	//遍历redux的action到组件的props
	function mapDispatchToProps(dispatch) {
	    return {
	        add: function add() {
	            return dispatch(_actions.todoAction);
	        }
	
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Message);

/***/ }

})
//# sourceMappingURL=0.74af6390fc9493cf91ab.hot-update.js.map