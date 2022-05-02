import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DropdownNationalities from '../components/DropdownNationalities';
import '../styles/components/Header.css';
import fetchNationality from '../services/fetchNationalities';

export default function ExploreNacionalities() {
  const location = useLocation();
  const type = location.pathname.includes('foods') ? 'foods' : 'drinks';
  const [natList, setNatList] = useState([]);

  const getNationalities = async () => {
    const { status, data } = await fetchNationality(type);
    if (status === 'ok') { setNatList(() => data); }
  };

  useEffect(() => { getNationalities(); }, []);

  // console.log(natList);

  return (
    <div>
      <Header title="Explore Nationalities" searchEnabled />
      {natList.length > 0 && <DropdownNationalities natList={ natList } />}
      <div>
        <Footer />
      </div>
    </div>
  );
}
