import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import EmailValidator from 'email-validator';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import '../styles/pages/pagesLogin.css';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    disabledButton: true,
  });

  const { email, password, disabledButton } = login;
  const history = useHistory();

  const validLogin = () => {
    const numberValid = 6;
    const validEmail = EmailValidator.validate(email); // true ou false
    const valueToInput = password.length > numberValid;

    if (valueToInput && validEmail) {
      setLogin({ ...login, disabledButton: false });
    } else {
      setLogin({ ...login, disabledButton: true });
    }
  };

  useEffect(() => {
    // const validLogin = () => {
    //   const numberValid = 6;
    //   const validEmail = EmailValidator.validate(email); // true ou false
    //   const valueToInput = password.length > numberValid;
    //   if (valueToInput && validEmail) {
    //     setLogin({ ...login, disabledButton: false });
    //   } else {
    //     setLogin({ ...login, disabledButton: true });
    //   }
    // };

    validLogin();
  }, [email, password]);

  const handleChangeLogin = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mealsToken = 1;
    const cocktailsToken = 1;
    localStorage.setItem('mealsToken', JSON.stringify(mealsToken));
    localStorage.setItem('cocktailsToken', JSON.stringify(cocktailsToken));
    localStorage.setItem(
      'user',
      JSON.stringify({ email }),
    );
    history.push('/foods');
  };

  return (
    <section className="containerLogin">
      <div className="contextBoxLogin">

        <h1>Login</h1>

        <form onSubmit={ handleSubmit }>
          <Input
            dataTestid="email-input"
            label="Email: "
            type="text"
            onChange={ handleChangeLogin }
            value={ email }
            name="email"
            id="emaildId"
            placeholder="Digite seu email"
            required
          />

          <Input
            dataTestid="password-input"
            label="Senha: "
            type="password"
            onChange={ handleChangeLogin }
            value={ password }
            name="password"
            id="passwordId"
            placeholder="Digite sua senha"
            required
          />

          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ disabledButton }
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}
