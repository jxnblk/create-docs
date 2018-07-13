'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLive = require('react-live');

var _mdxProvider = require('@mdx-js/tag/dist/mdx-provider');

var _gridStyled = require('grid-styled');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transformCode = function transformCode(src) {
  return '<React.Fragment>' + src + '</React.Fragment>';
};

var Preview = function Preview(props) {
  return _react2.default.createElement(_gridStyled.Box, _extends({}, props, {
    is: _reactLive.LivePreview,
    css: {
      padding: '16px',
      border: '1px solid',
      borderColor: 'lightgray',
      borderRadius: '2px 2px 0 0'
    }
  }));
};

var Editor = function Editor(props) {
  return _react2.default.createElement(_gridStyled.Box, _extends({}, props, {
    is: _reactLive.LiveEditor,
    bg: 'lightgray',
    css: {
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      margin: 0,
      padding: '16px',
      borderRadius: '0 0 2px 2px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'lightgray',
      '&:focus': {
        outline: 'none'
      }
    }
  }));
};

var Err = function Err(props) {
  return _react2.default.createElement(_gridStyled.Box, _extends({}, props, {
    css: {
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      padding: '8px',
      color: 'white',
      backgroundColor: 'red'
    }
  }));
};

exports.default = (0, _mdxProvider.withMDXComponents)((_temp = _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          code = _props.code,
          scope = _props.scope,
          components = _props.components,
          render = _props.render,
          previewProps = _props.previewProps,
          editorProps = _props.editorProps,
          errorProps = _props.errorProps;

      return _react2.default.createElement(
        _gridStyled.Box,
        { my: 3 },
        _react2.default.createElement(
          _reactLive.LiveProvider,
          {
            code: code,
            scope: _extends({}, components, scope),
            mountStylesheet: false,
            transformCode: transformCode },
          typeof render === 'function' ? render({
            code: code,
            scope: _extends({}, components, scope)
          }) : _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(Preview, previewProps),
            _react2.default.createElement(Editor, editorProps),
            _react2.default.createElement(Err, errorProps)
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component), _class.displayName = 'LiveEditor', _class.propTypes = {
  code: _propTypes2.default.string.isRequired,
  scope: _propTypes2.default.object,
  components: _propTypes2.default.object,
  render: _propTypes2.default.func,
  previewProps: _propTypes2.default.object,
  editorProps: _propTypes2.default.object,
  errorProps: _propTypes2.default.object
}, _temp));