"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var Person_1 = require("./Person");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
function reducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        default:
            return state;
    }
}
var store = redux_1.createStore(reducer);
function App() {
    return (React.createElement("div", { className: "app" },
        React.createElement("h1", null, "Connected component with union prop"),
        React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(Person_1.UnconnectedPerson, { type: "name", name: "Foo Bar" },
                React.createElement("p", null, "UnconnectedPerson with type \"name\" and correct prop \"name\"")),
            React.createElement(Person_1.UnconnectedPerson, { type: "nickname", nickname: "baz" },
                React.createElement("p", null, "UnconnectedPerson with type \"nickname\" and correct prop \"nickname\"")),
            React.createElement(Person_1.UnconnectedPerson, { type: "name" },
                React.createElement("p", null, "UnconnectedPerson with type \"name\" and missing prop \"name\"")),
            React.createElement(Person_1.UnconnectedPerson, { type: "nickname" },
                React.createElement("p", null, "UnconnectedPerson with type \"nickname\" and missing prop \"nickname\"")),
            React.createElement(Person_1.ConnectedPerson, { type: "name", name: "Foo Bar" },
                React.createElement("p", null, "ConnectedPerson with type \"name\" and correct prop \"name\"")),
            React.createElement(Person_1.ConnectedPerson, { type: "nickname", nickname: "baz" },
                React.createElement("p", null, "ConnectedPerson with type \"nickname\" and correct prop \"nickname\"")),
            React.createElement(Person_1.ConnectedPerson, { type: "name" },
                React.createElement("p", null, "ConnectedPerson with type \"name\" and missing prop \"name\"")),
            React.createElement(Person_1.ConnectedPerson, { type: "nickname" },
                React.createElement("p", null, "ConnectedPerson with type \"nickname\" and missing prop \"nickname\"")))));
}
var rootElement = document.getElementById('root');
react_dom_1.render(React.createElement(App, null), rootElement);
