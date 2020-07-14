import { useEffect, useState } from "react";

// GET DATA FOR THE GRAPH
export const useGraphData = (props) => {
  const { SCRAP_PERCENTAGE } = props;
  const [graphData, setGraphData] = useState([]);

  const filterGraphData = () => {
    const resultArr = [];
    Object.keys(props).map((item) => {
      const re = /[H][0-9]/;
      if (re.test(item)) {
        const scrapNumber = Math.floor(props[item] * SCRAP_PERCENTAGE);
        resultArr.push([item, props[item] - scrapNumber]);
      }
      return setGraphData(resultArr);
    });
  };

  useEffect(() => {
    filterGraphData();
  }, [props]);
  return graphData;
};
