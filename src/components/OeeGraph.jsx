import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getPercentage } from "./actions/getPercentage";
import { colors } from "./const";

const Wrapper = styled.div`
  display: flex;
  height: 75px;
  padding: 5px 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
const BarWrapper = styled.div`
  width: 75px;
  margin-left: 50px;
`;

const OeeGraph = ({ MACHINE }) => {
  const data = useSelector((state) => state.OEE);
  const percentage = getPercentage(data, MACHINE);

  return (
    <Wrapper>
      <h2>OEE:</h2>
      <BarWrapper>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: `${colors.BLACK}`,
            pathColor: `${colors.RED}`,
            trailColor: `${colors.WHITE}`,
          })}
        />
      </BarWrapper>
    </Wrapper>
  );
};
OeeGraph.propTypes = {
  MACHINE: PropTypes.string.isRequired,
};

export default OeeGraph;
