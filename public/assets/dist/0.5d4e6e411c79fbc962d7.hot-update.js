webpackHotUpdate(0,{

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _List = __webpack_require__(810);
	
	var _Divider = __webpack_require__(819);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _reactRouter = __webpack_require__(474);
	
	var _Subheader = __webpack_require__(812);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Avatar = __webpack_require__(821);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _colors = __webpack_require__(717);
	
	var _IconButton = __webpack_require__(770);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(823);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconMenu = __webpack_require__(824);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(841);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactSwipeableViews = __webpack_require__(782);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	var _routePrefix = __webpack_require__(766);
	
	var _routePrefix2 = _interopRequireDefault(_routePrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	    link: {
	        display: "block",
	        textDecoration: "none"
	    }
	};
	var iconButtonElement = _react2.default.createElement(
	    _IconButton2.default,
	    {
	        touch: true,
	        tooltip: "more",
	        tooltipPosition: "bottom-left"
	    },
	    _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
	);
	
	var rightIconMenu = _react2.default.createElement(
	    _IconMenu2.default,
	    { iconButtonElement: iconButtonElement },
	    _react2.default.createElement(
	        _MenuItem2.default,
	        null,
	        "Reply"
	    ),
	    _react2.default.createElement(
	        _MenuItem2.default,
	        null,
	        "Forward"
	    ),
	    _react2.default.createElement(
	        _MenuItem2.default,
	        null,
	        "Delete"
	    )
	);
	var Lists = function Lists(props) {
	    var tabChn = { all: '全部', good: '精华', share: '分享', ask: '问答', job: '招聘' };
	    var topics = props.topics,
	        dispatch = props.dispatch,
	        isFetching = props.isFetching;
	    // console.log(props);
	
	    return _react2.default.createElement(
	        _reactSwipeableViews2.default,
	        null,
	        _react2.default.createElement(
	            _List.List,
	            { style: { marginTop: "60px" } },
	            topics.map(function (topic, i) {
	                return _react2.default.createElement(
	                    _reactRouter.Link,
	                    { key: i, to: _routePrefix2.default + "/Article/" + topic.id, style: styles.link },
	                    _react2.default.createElement(_List.ListItem, {
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: topic.author.avatar_url }),
	                        primaryText: topic.title,
	                        secondaryText: _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                topic.reply_count + '/' + topic.visit_count
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                tabChn[topic.tab]
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                { style: { float: 'right' } },
	                                topic.create_at
	                            )
	                        ),
	                        secondaryTextLines: 2
	                    }),
	                    _react2.default.createElement(_Divider2.default, { inset: true })
	                );
	            })
	        )
	    );
	};
	exports.default = Lists;

/***/ }

})
//# sourceMappingURL=0.5d4e6e411c79fbc962d7.hot-update.js.map