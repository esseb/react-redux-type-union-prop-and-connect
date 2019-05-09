import * as React from 'react';
import { render } from 'react-dom';
import { ConnectedPerson, UnconnectedPerson } from './Person';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <div className="app">
      <h1>Connected component with union prop</h1>

      <Provider store={store}>
        {/* This should NOT trigger a TypeScript error and it correctly does NOT trigger one */}
        <UnconnectedPerson type="name" name="Foo Bar">
          <p>UnconnectedPerson with type "name" and correct prop "name"</p>
        </UnconnectedPerson>

        {/* This should NOT trigger a TypeScript error and it correctly does NOT trigger one */}
        <UnconnectedPerson type="nickname" nickname="baz">
          <p>
            UnconnectedPerson with type "nickname" and correct prop "nickname"
          </p>
        </UnconnectedPerson>

        {/* This SHOULD trigger a TypeScript error and it correctly DOES trigger one */}
        <UnconnectedPerson type="name">
          <p>UnconnectedPerson with type "name" and missing prop "name"</p>
        </UnconnectedPerson>

        {/* This SHOULD trigger a TypeScript error and it correctly DOES trigger one */}
        <UnconnectedPerson type="nickname">
          <p>
            UnconnectedPerson with type "nickname" and missing prop "nickname"
          </p>
        </UnconnectedPerson>

        {/* This should NOT trigger a TypeScript error but it incorrectly DOES trigger one */}
        <ConnectedPerson type="name" name="Foo Bar">
          <p>ConnectedPerson with type "name" and correct prop "name"</p>
        </ConnectedPerson>

        {/* This should NOT trigger a TypeScript error but it incorrectly DOES trigger one */}
        <ConnectedPerson type="nickname" nickname="baz">
          <p>
            ConnectedPerson with type "nickname" and correct prop "nickname"
          </p>
        </ConnectedPerson>

        {/* This SHOULD trigger a TypeScript error but it incorrectly does NOT trigger one */}
        <ConnectedPerson type="name">
          <p>ConnectedPerson with type "name" and missing prop "name"</p>
        </ConnectedPerson>

        {/* This SHOULD trigger a TypeScript error but it incorrectly does NOT trigger one */}
        <ConnectedPerson type="nickname">
          <p>
            ConnectedPerson with type "nickname" and missing prop "nickname"
          </p>
        </ConnectedPerson>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
