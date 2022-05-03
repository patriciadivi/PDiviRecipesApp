import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Login from '../pages/Login';

test('Testando a existência dos elementos na página de login', () => {
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <Login />
    </Router>,
  );
  expect(
    screen.getByRole('heading', {
      name: /Login/i,
    }),
  ).toBeInTheDocument();

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  const inputPassword = screen.getByText(/senha:/i);
  expect(inputPassword).toBeInTheDocument();
  const buttonLogin = screen.getByRole('button', { name: /entrar/i });
  expect(buttonLogin).toBeInTheDocument();
});

test('Testando a validação dos inputs', () => {
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <Login />
    </Router>,
  );
  const invalidEmail = 'emailInvalido...';
  const invalidPassword = '123456';
  const validEmail = 'valid@test.com';
  const validPassword = '1234567';
  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  const inputPassword = screen.getByLabelText(/senha:/i);
  userEvent.type(inputEmail, invalidEmail);
  userEvent.type(inputPassword, invalidPassword);
  expect(inputEmail).toHaveValue(invalidEmail);
  expect(inputPassword).toHaveValue(invalidPassword);
  const buttonLogin = screen.getByRole('button', { name: /entrar/i });
  expect(buttonLogin).toBeDisabled();

  userEvent.type(inputEmail, validEmail);
  userEvent.type(inputPassword, validPassword);
  expect(inputEmail).toHaveValue(validEmail);
  expect(inputPassword).toHaveValue(validPassword);
  expect(buttonLogin).toBeEnabled();
});
