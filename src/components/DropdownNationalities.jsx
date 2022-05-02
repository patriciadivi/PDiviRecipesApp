import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import randomIdNumber from '../services/randomIdNumber';
import { actFetchByNationality } from '../Redux/actions';

export default function DropdownNationalities({ natList, type }) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex jus justify-content-center">
      <DropdownButton
        className="mt-3 mx-3 "
        title="Select Nationality"
        size="lg"
        variant="light"
        data-testid="explore-by-nationality-dropdown"
        renderMenuOnMount
        // menuRole="menu"
      >
        {natList.map((nat) => (
          <Dropdown.Item
            key={ nat + randomIdNumber() }
            data-testid={ `${nat}-option` }
            value={ nat }
            onClick={ () => dispatch(actFetchByNationality(type, nat)) }
          >
            {nat}
          </Dropdown.Item>))}
      </DropdownButton>
    </div>
  );
}

DropdownNationalities.propTypes = {
  natList: PropTypes.arrayOf(string).isRequired,
  type: PropTypes.string.isRequired,
};
