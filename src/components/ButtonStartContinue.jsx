import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/components/ButtonStartContinue.css';

export default function ButtonStartContinue(props) {
  const {
    recipieDone,
    recipieStarted,
    id,
    type,
  } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${type}/${id}/in-progress`);
  };
  let btnText = 'Start Recepie';
  if (recipieStarted) { btnText = 'Continue Recipe'; }
  return (
    <div>
      {(!recipieDone)
          && (
            <Button
              className="ButtonStartContinue"
              data-testid="start-recipe-btn"
              type="button"
              onClick={ () => handleClick() }
            >
              { btnText }
            </Button>)}
    </div>
  );
}

ButtonStartContinue.propTypes = {
  recipieDone: PropTypes.bool.isRequired,
  recipieStarted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
