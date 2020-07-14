import { useState, useEffect } from "react";

// GET DATA FOR THE GRAPH
export const useGraphData = (props, scrap) => {
  const [graphData, setGraphData] = useState([]);
  const filterGraphData = () => {
    Object.keys(props).map((item) => {
      const re = /[H][0-23]/;
      if (re.test(item)) {
        const scrapNumber = Math.floor(props[item] * scrap);

        setGraphData((prevState) => [
          ...prevState,
          [item, props[item] - scrapNumber],
        ]);
      }
    });
  };

  useEffect(() => {
    filterGraphData();
  }, [props]);
  return graphData;
};
