import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecepieCard from '../components/RecepieCard';
import ButtonList from '../components/ButtonList';
import { actFetchGenericRecepies, cancelAvoidFetch } from '../Redux/actions/index';
import fetchCategories from '../services/fetchCategories';
import Footer from '../components/Footer';
import randomIdNumber from '../services/randomIdNumber';
import '../styles/components/Header.css';
import '../styles/pages/PagesDrinks.css';

export default function Drinks() {
  const [buttonList, setButtonList] = useState([]);
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  const loading = useSelector((state) => state.reducer1.loading);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const avoidFetchAtLoad = useSelector((state) => state.reducer1.avoidFetchAtMainPage);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const { status, data } = await fetchCategories('drinks');
    const numOfCategores = 5;
    if (status === 'ok') { setButtonList(() => data.drinks.slice(0, numOfCategores)); }
  };

  useEffect(() => {
    if (!avoidFetchAtLoad) {
      dispatch(actFetchGenericRecepies('drinks'));
    }
    if (avoidFetchAtLoad) { dispatch(cancelAvoidFetch()); }
  }, []);
  useEffect(() => { getCategories(); }, []);

  return (
    <section className="Drinks">
      <Header title="Drinks" searchEnabled />
      {searchBarActive && <SearchBar />}
      {buttonList.length > 0 && <ButtonList names={ buttonList } type="drinks" />}
      {loading && <Alert variant="warning">Loading</Alert>}
      {searchedRecepies.length > 0 && !loading && (
        <div className="d-flex flex-wrap justify-content-around DivCard">
          {searchedRecepies.map((rec, index) => (
            <RecepieCard
              key={ `${rec.idDrink}${randomIdNumber()}` }
              id={ rec.idDrink }
              imageSrc={ rec.strDrinkThumb }
              title={ rec.strDrink }
              index={ index }
              type="drinks"
            />
          ))}
        </div>
      )}
      <div>
        <Footer />
      </div>
    </section>
  );
}
