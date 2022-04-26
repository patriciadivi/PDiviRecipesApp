import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    name,
    label,
    onChange,
    value,
    id,
    dataTestid,
    placeholder,
  } = props;

  return (
    <label htmlFor={ id }>
      { label }
      <input
        data-testid={ dataTestid }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        id={ id }
        placeholder={ placeholder }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
  placeholder: PropTypes.string,

};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  dataTestid: '',
  onChange: null,
  placeholder: '',
};

export default Input;
