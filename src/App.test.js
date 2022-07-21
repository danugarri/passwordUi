import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Suspense fallback='Loading translations'>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
