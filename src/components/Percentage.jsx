import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize } from "./const";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Title = styled.h2`
  margin: 10px 0 5px;
`;
const Info = styled.p`
  font-size: ${fontSize.XL};
  margin-right: 2px;
`;
const Percentage = ({ props, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>{props} %</Info>
    </Wrapper>
  );
};
Percentage.propTypes = {
  props: PropTypes.number,
  title: PropTypes.string.isRequired,
};
Percentage.defaultProps = {
  props: 0,
};
export default Percentage;
