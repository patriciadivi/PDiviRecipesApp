import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecepieCard from '../components/RecepieCard';
import { actFetchGenericRecepies } from '../Redux/actions/index';

export default function Drinks() {
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  const loading = useSelector((state) => state.reducer1.loading);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(actFetchGenericRecepies('drinks')); }, []);
  return (
    <div>
      <Header title="Drinks" searchEnabled />
      {searchBarActive && <SearchBar />}
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
    </div>
  );
}
