import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ItemsPage from '../pages/ItemsPage';

test('renders items page with a list of items', () => {
  render(
    <Provider store={store}>
      <ItemsPage />
    </Provider>
  );

  const addButton = screen.getByRole('button', { name: /add item/i });
  expect(addButton).toBeInTheDocument();

  const itemsTable = screen.getByRole('table');
  expect(itemsTable).toBeInTheDocument();
});
