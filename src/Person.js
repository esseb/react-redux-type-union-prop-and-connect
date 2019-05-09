"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("./Person.css");
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
function UnconnectedPerson(props) {
    var _a = props.theme, theme = _a === void 0 ? "light" : _a, children = props.children;
    return (react_1["default"].createElement("div", { className: "person person--theme-" + theme },
        isName(props) && react_1["default"].createElement("p", null,
            "Name: ",
            props.name),
        isNickname(props) && react_1["default"].createElement("p", null,
            "Nickname: ",
            props.nickname),
        children));
}
exports.UnconnectedPerson = UnconnectedPerson;
exports.ConnectedPerson = react_redux_1.connect(function (state) {
    return {
        theme: "dark" // e.g. `selectTheme(state)`
    };
})(UnconnectedPerson);
function isName(arg) {
    return arg.type === "name";
}
function isNickname(arg) {
    return arg.type === "nickname";
}
