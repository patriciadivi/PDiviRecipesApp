import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { string } from 'prop-types';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import randomIdNumber from '../services/randomIdNumber';
import { actFetchByNationality } from '../Redux/actions';

export default function DropdownNationalities({ natList, type }) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex jus justify-content-center">
      <select
        className="mt-3 mx-3 light"
        // title="Select Nationality"
        // size="lg"
        // variant="light"
        data-testid="explore-by-nationality-dropdown"
        // renderMenuOnMount
        defaultValue="default"

      >
        <option value="default" disabled>Select Nationality</option>
        {natList.map((nat) => (
          <option
            key={ nat + randomIdNumber() }
            data-testid={ `${nat}-option` }
            value={ nat }
            onClick={ () => dispatch(actFetchByNationality(type, nat)) }
          >
            {nat}
          </option>))}
      </select>
    </div>
  );
}

DropdownNationalities.propTypes = {
  natList: PropTypes.arrayOf(string).isRequired,
  type: PropTypes.string.isRequired,
};
