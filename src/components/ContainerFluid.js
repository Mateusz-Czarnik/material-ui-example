import PropTypes from 'prop-types';
import styled from "styled-components";
import {DEFAULT_GUTTER} from "../theme";

const ContainerFluid = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : '100%'};
  padding-left: ${({gutter}) => `${gutter}px`};
  padding-right: ${({gutter}) => `${gutter}px`};
`;

ContainerFluid.propTypes = {
  maxWidth: PropTypes.number,
  gutter: PropTypes.number
};

ContainerFluid.defaultProps = {
  maxWidth: null,
  gutter: DEFAULT_GUTTER
};

export default ContainerFluid;
