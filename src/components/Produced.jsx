import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  p {
    padding: 5px 0;
  }
`;
const Produced = ({ productionNumber }) => {
  return (
    <Wrapper>
      <h2>Net Units Produced:</h2>
      <p>{productionNumber}</p>
    </Wrapper>
  );
};
Produced.propTypes = {
  productionNumber: PropTypes.number,
};
Produced.defaultProps = {
  productionNumber: 0,
};
export default Produced;
