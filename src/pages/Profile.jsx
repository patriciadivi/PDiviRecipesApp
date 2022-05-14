import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Header.css';
import '../styles/pages/PagesProfile.css';

export default function Profile() {
  const history = useHistory();
  const [email, setMail] = useState('email');

  const cleanStorageAndRedirect = () => {
    window.localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    const tempData = window.localStorage.getItem('user');
    let user = false;
    if (tempData) { user = JSON.parse(tempData); }
    if (user.email) { setMail(() => user.email); }
  }, []);

  return (
    <div className="Profile">
      <Header title="Profile" />
      <div className="d-flex flex-column">
        <h2 className="mx-auto my-5" data-testid="profile-email">{email}</h2>
        <Button
          variant="light"
          data-testid="profile-done-btn"
          size="lg"
          className="mt-3 mx-auto BtnProfile"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </Button>
        <Button
          variant="light"
          data-testid="profile-favorite-btn"
          size="lg"
          className="mt-3 mx-auto BtnProfile"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </Button>
        <Button
          variant="light"
          data-testid="profile-logout-btn"
          size="lg"
          className="mt-3 mx-auto BtnProfile"
          onClick={ () => cleanStorageAndRedirect() }
        >
          Logout
        </Button>
      </div>

      <Footer />
    </div>
  );
}
