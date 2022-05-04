import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import randomIdNumber from '../services/randomIdNumber';

export default function Carrosel({ indications, type }) {
  const dois = 2;
  const quatro = 4;
  const seis = 6;

  const testCard = (rec, index) => (
    <Card
      style={ { width: '10rem' } }
      className="mt-3"
      key={ `${rec[0]}${randomIdNumber()}` }
      data-testid={ `${index}-recomendation-card` }
    >
      <Link to={ `/${type}/${rec[0]}` } className="stretched-link" />
      <Card.Img
        variant="top"
        src={ rec[1] }
        data-testid={ `${index}-card-img` }
      />
      <Card.Body>
        <Card.Title data-testid={ `${index}-recomendation-title` }>
          { rec[2] }
        </Card.Title>
      </Card.Body>
    </Card>);

  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-around">
          {indications.filter((e, i) => i < dois)
            .map((rec, index) => testCard(rec, index))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-around">
          {indications.filter((e, i) => i >= dois && i < quatro)
            .map((rec, index) => testCard(rec, index + dois))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-around">
          {indications.filter((e, i) => i >= quatro && i < seis)
            .map((rec, index) => testCard(rec, index + quatro))}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

Carrosel.propTypes = {
  indications: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  type: PropTypes.string.isRequired,
};
