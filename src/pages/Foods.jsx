import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecepieCard from '../components/RecepieCard';
import { actFetchGenericRecepies, cancelAvoidFetch } from '../Redux/actions/index';
import fetchCategories from '../services/fetchCategories';
import randomIdNumber from '../services/randomIdNumber';
import ButtonList from '../components/ButtonList';
import Footer from '../components/Footer';
import '../styles/pages/pagesFoods.css';
import '../styles/components/Header.css';

export default function Foods() {
  // const page = 'foods';
  const [buttonList, setButtonList] = useState([]);
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  const loading = useSelector((state) => state.reducer1.loading);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const avoidFetchAtLoad = useSelector((state) => state.reducer1.avoidFetchAtMainPage);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const { status, data } = await fetchCategories('foods');
    const numOfCategores = 5;
    if (status === 'ok') { setButtonList(() => data.meals.slice(0, numOfCategores)); }
  };

  useEffect(() => {
    if (!avoidFetchAtLoad) {
      dispatch(actFetchGenericRecepies('foods'));
    }
    if (avoidFetchAtLoad) { dispatch(cancelAvoidFetch()); }
  }, [avoidFetchAtLoad, dispatch]);
  useEffect(() => { getCategories(); }, []);

  return (
    <section className="Foods">
      <Header title="Foods" searchEnabled />
      {searchBarActive && <SearchBar />}
      {buttonList.length > 0 && <ButtonList names={ buttonList } type="foods" />}
      {loading && <Alert variant="warning">Loading</Alert>}
      {searchedRecepies.length > 0 && !loading && (
        <div className="d-flex flex-wrap justify-content-around">
          {searchedRecepies.map((rec, index) => (
            <RecepieCard
              key={ `${rec.idMeal}${randomIdNumber()}` }
              id={ rec.idMeal }
              imageSrc={ rec.strMealThumb }
              title={ rec.strMeal }
              index={ index }
              type="foods"
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
