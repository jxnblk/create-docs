'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.code = exports.pre = exports.LivePreview = exports.LiveEditor = undefined;

var _LiveEditor = require('./LiveEditor');

Object.defineProperty(exports, 'LiveEditor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LiveEditor).default;
  }
});

var _LivePreview = require('./LivePreview');

Object.defineProperty(exports, 'LivePreview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LivePreview).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gridStyled = require('grid-styled');

var _LiveEditor2 = _interopRequireDefault(_LiveEditor);

var _LivePreview2 = _interopRequireDefault(_LivePreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var pre = exports.pre = function pre(props) {
  return props.children;
};

// todo: decouple from Rebass completely
var code = function code(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      scope = _ref.scope,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'scope']);

  var lang = className.replace(/^language\-/, '');
  var type = lang.charAt(0);
  var code = _react2.default.Children.toArray(children).join('\n');

  switch (type) {
    case '.':
      return _react2.default.createElement(_LiveEditor2.default, { code: code, scope: scope });
    case '!':
      return _react2.default.createElement(_LivePreview2.default, { code: code, scope: scope });
    default:
      return _react2.default.createElement(_gridStyled.Box, {
        is: 'pre',
        p: 3,
        mt: 4,
        mb: 4,
        bg: 'lightgray',
        fontSize: 13,
        css: {
          fontFamily: 'Menlo, monospace'
        },
        children: children
      });
  }
};

exports.code = code;
exports.default = {
  pre: pre,
  code: code
};