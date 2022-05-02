import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecepieCard from '../components/RecepieCard';
import DropdownNationalities from '../components/DropdownNationalities';
import '../styles/components/Header.css';
import fetchNationality from '../services/fetchNationalities';
// import { actFetchByNationality } from '../Redux/actions/index';
import randomIdNumber from '../services/randomIdNumber';
import { actFetchGenericRecepies } from '../Redux/actions';

export default function ExploreNacionalities() {
  const dispatch = useDispatch();
  const location = useLocation();
  const type = location.pathname.includes('foods') ? 'foods' : 'drinks';
  const [natList, setNatList] = useState([]);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  const loading = useSelector((state) => state.reducer1.loading);

  const getNationalities = async () => {
    const { status, data } = await fetchNationality(type);
    if (status === 'ok') { setNatList(() => data); }
  };

  useEffect(() => { getNationalities(); }, []);
  useEffect(() => { dispatch(actFetchGenericRecepies(type)); }, []);

  return (
    <div>
      <Header title="Explore Nationalities" searchEnabled />
      {natList.length > 0 && <DropdownNationalities natList={ natList } type={ type } />}
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
    </div>
  );
}
