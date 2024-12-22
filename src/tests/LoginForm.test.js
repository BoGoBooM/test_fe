import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../components/LoginForm';

test('renders login form and validates input', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole('button', { name: /login/i });

  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password');
  userEvent.click(loginButton);

  expect(handleSubmit).toHaveBeenCalled();
});
