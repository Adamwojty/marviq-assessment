import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { colors } from "./const";
import Produced from "./Produced";
import Percentage from "./Percentage";
import { useCalculateData } from "../hooks/useCalculateData";
import { useColor } from "../hooks/useColor";
import Graph from "./Graph";
import OeeGraph from "./OeeGraph";
const pulse = (machineStatus) => keyframes`
  0% {
    background-color: ${colors.WHITE}
  }
  50% {
       background-color: ${machineStatus}; 
  }
  100% {
    background-color: ${colors.WHITE}
  }`;

const Wrapper = styled.div`
  display: flex;
  min-width: 280px;
  flex-direction: column;
  margin: 50px 0;
  min-height: 400px;
  border: 2px solid ${colors.BLACK};
`;
const InformationWrapper = styled.div`
  padding: 0 10px;
`;
const RowWrapper = styled.div`
  padding: 5px 0;
  border-top: 2px solid ${colors.BLACK};
  display: flex;
  justify-content: space-between;
`;
const Header = styled.header`
  padding: 10px;
  font-size: 20px;
  color: ${colors.BLACK};
  background-color: ${({ machineStatus }) => machineStatus};
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${colors.BLACK};
  ${({ machineStatus }) =>
    machineStatus !== "green" &&
    css`
      animation: ${({ machineStatus }) => pulse(machineStatus)} 3s infinite;
    `};
`;
const MachineTile = ({ props, isLoading, status }) => {
  const { MACHINE, PRODUCTION, SCRAP_PERCENTAGE, DOWNTIME_PERCENTAGE } = props;
  const caltulatedData = useCalculateData(
    PRODUCTION,
    SCRAP_PERCENTAGE,
    DOWNTIME_PERCENTAGE
  );
  const machineStatus = useColor(status, MACHINE);
  const { produced, scrap, downtime } = caltulatedData;
  return (
    <Wrapper isLoading={isLoading}>
      <Header machineStatus={machineStatus}>{MACHINE}</Header>
      <InformationWrapper>
        <Produced productionNumber={produced} />
        <RowWrapper>
          <Percentage props={scrap} title='Scrap' />
          <Percentage props={downtime} title='Downtime' />
        </RowWrapper>
        <OeeGraph props={props} />
        <Graph props={props} />
      </InformationWrapper>
    </Wrapper>
  );
};

MachineTile.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  isLoading: PropTypes.bool,
  status: PropTypes.objectOf(PropTypes.string),
};
MachineTile.defaultProps = {
  isLoading: false,
  status: null,
};

export default MachineTile;
