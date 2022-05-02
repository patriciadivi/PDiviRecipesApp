import React from 'react';
import PropTypes, { string } from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import randomIdNumber from '../services/randomIdNumber';

export default function DropdownNationalities({ natList }) {
  console.log(natList);
  return (
    <DropdownButton
      className="mt-3 mx-3 "
      title="Select Nationality"
      size="lg"
      variant="light"
      data-testid="explore-by-nationality-dropdown"
      renderMenuOnMount="true"
    >
      {natList.map((nat) => (
        <Dropdown.Item
          key={ nat + randomIdNumber() }
          data-testid={ `${nat}-option` }
          value={ nat }
        >
          {nat}
        </Dropdown.Item>))}
    </DropdownButton>
  );
}

DropdownNationalities.propTypes = {
  natList: PropTypes.arrayOf(string).isRequired,
};
