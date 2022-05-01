import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import randomIdNumber from '../services/randomIdNumber';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';
import '../styles/components/Header.css';
import { actFetchIngredients } from '../Redux/actions';

export default function ExploreIngredients() {
  const location = useLocation();
  const type = location.pathname.includes('foods') ? 'foods' : 'drinks';

  const loading = useSelector((state) => state.reducer1.loading);
  const searchedIngredients = useSelector((state) => state.reducer1.searchedIngredients);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(actFetchIngredients(type)); }, [dispatch, type]);

  return (
    <div>
      <Header title="Explore Ingredients" searchEnabled={ false } />
      {loading && <Alert variant="warning">Loading</Alert>}
      {searchedIngredients.length > 0 && !loading && (
        // <div>Teste</div>
        <div className="d-flex flex-wrap justify-content-around">
          {searchedIngredients.map((ing, index) => (
            <IngredientCard
              key={ `${ing[0]}${randomIdNumber()}` }
              urlEndImage={ ing[1] }
              title={ ing[0] }
              index={ index }
              type={ type }
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
