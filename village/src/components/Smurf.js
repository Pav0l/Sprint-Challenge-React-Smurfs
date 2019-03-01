import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Smurf = ({ name, height, age}) => {
  return (
    <SmurfCard className="Smurf">
      <h3>{name}</h3>
      <p>{height} tall</p>
      <p>{age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

Smurf.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const SmurfCard = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  margin: 1rem auto;
`;

export default Smurf;