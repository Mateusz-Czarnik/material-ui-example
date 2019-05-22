import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ContainerFluid = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px`: '100%'};
`;

ContainerFluid.propTypes = {
  maxWidth: PropTypes.number
};

ContainerFluid.defaultProps = {
  maxWidth: null
};

export default ContainerFluid;
