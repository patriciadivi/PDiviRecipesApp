import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecepieCard from '../components/RecepieCard';
import ButtonList from '../components/ButtonList';
import { actFetchGenericRecepies } from '../Redux/actions/index';
import fetchCategories from '../services/fetchCategories';
import Footer from '../components/Footer';


export default function Drinks() {
  const [buttonList, setButtonList] = useState([]);
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  const loading = useSelector((state) => state.reducer1.loading);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const { status, data } = await fetchCategories('drinks');
    const numOfCategores = 5;
    if (status === 'ok') { setButtonList(() => data.drinks.slice(0, numOfCategores)); }
  };

  useEffect(() => { dispatch(actFetchGenericRecepies('drinks')); }, []);
  useEffect(() => { getCategories(); }, []);

  return (
    <div>
      <Header title="Drinks" searchEnabled />
      {searchBarActive && <SearchBar />}
      {buttonList.length > 0 && <ButtonList names={ buttonList } />}
      {loading && <Alert variant="warning">Loading</Alert>}
      {searchedRecepies.length > 0 && !loading && (
        <div className="d-flex flex-wrap justify-content-around">
          {searchedRecepies.map((rec, index) => (
            <RecepieCard
              key={ rec.idDrink }
              id={ rec.idDrink }
              imageSrc={ rec.strDrinkThumb }
              title={ rec.strDrink }
              index={ index }
            />
          ))}
        </div>
      )}
      Drinks
      <div>
        <Footer />
      </div>
    </div>
  );
}
