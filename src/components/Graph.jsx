import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Chart } from "react-charts";
import { useGraphData } from "../hooks/useGraphData";

const Wrapper = styled.div`
  margin-top: 20px;
  height: 300px;
  font-size: 8px;
  overflow: hidden;
`;

const Graph = ({ props }) => {
  const { SCRAP_PERCENTAGE } = props;
  const graphData = useGraphData(props, SCRAP_PERCENTAGE);
  const originalData = useMemo(
    () => [
      {
        label: "NetProduction",
        data: graphData,
      },
    ],
    [graphData]
  );

  const series = useMemo(
    () => ({
      type: "bar",
    }),
    []
  );
  const axes = useMemo(
    () => [
      { primary: true, position: "bottom", type: "ordinal" },
      { position: "left", type: "linear", min: 0, stacked: true, show: false },
    ],
    []
  );
  return (
    <Wrapper>
      <Chart data={originalData} axes={axes} series={series} tooltip />
    </Wrapper>
  );
};
Graph.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};
export default Graph;
