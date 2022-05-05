import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ButtonStartContinue(props) {
  const {
    recipieDone,
    recipieStarted,
    id,
    type,
  } = props;
  // const history = useHistory();
  // const dispatch = useDispatch();

  // const handleClick = (ingredient) => {
  //   dispatch(actFetchByIngredients(type, ingredient));
  //   history.push(`/${type}`);
  // };
  let btnText = 'Start Recepie';
  if (recipieStarted) { btnText = 'Continue Recipe'; }
  console.log(id);
  console.log(type);
  return (
    <div>
      {(!recipieDone)
          && (
            <Button data-testid="start-recipe-btn" type="button">
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
