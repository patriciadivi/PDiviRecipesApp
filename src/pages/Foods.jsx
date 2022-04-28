import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecepieCard from '../components/RecepieCard';
import { actFetchGenericRecepies } from '../Redux/actions/index';

export default function Foods() {
  // const page = 'foods';
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  const loading = useSelector((state) => state.reducer1.loading);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const dispatch = useDispatch();
  // console.log(searchBarActive);
  useEffect(() => { dispatch(actFetchGenericRecepies('foods')); }, []);

  // console.log(searchedRecepies);
  return (
    <div>
      <Header title="Foods" searchEnabled />
      {searchBarActive && <SearchBar />}
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
  );
}
