import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecepieCard from '../components/RecepieCard';
import { actFetchGenericRecepies } from '../Redux/actions/index';
import fetchCategories from '../services/fetchCategories';
import ButtonList from '../components/ButtonList';
import Footer from '../components/Footer';

export default function Foods() {
  // const page = 'foods';
  const [buttonList, setButtonList] = useState([]);
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  const loading = useSelector((state) => state.reducer1.loading);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const { status, data } = await fetchCategories('foods');
    const numOfCategores = 5;
    if (status === 'ok') { setButtonList(() => data.meals.slice(0, numOfCategores)); }
  };

  useEffect(() => { dispatch(actFetchGenericRecepies('foods')); }, []);
  useEffect(() => { getCategories(); }, []);

  return (
    <section className="Foods">
      <Header title="Foods" searchEnabled />
      {searchBarActive && <SearchBar />}
      {buttonList.length > 0 && <ButtonList names={ buttonList } />}
      {loading && <Alert variant="warning">Loading</Alert>}
      {searchedRecepies.length > 0 && !loading && (
        <div className="d-flex flex-wrap justify-content-around">
          {searchedRecepies.map((rec, index) => (
            <RecepieCard
              key={ rec.idMeal }
              id={ rec.idMeal }
              imageSrc={ rec.strMealThumb }
              title={ rec.strMeal }
              index={ index }
            />
          ))}
        </div>
      )}
    </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
