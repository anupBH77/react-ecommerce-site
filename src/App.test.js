import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { provider } from './firebase/firebase.utils';
import { store } from './store/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
