import { useState, useEffect } from "react";

export const useCalculateData = (props) => {
  const { PRODUCTION, SCRAP_PERCENTAGE, DOWNTIME_PERCENTAGE } = props;
  const [calculatedData, setCalculatedData] = useState({});
  const calculateData = () => {
    // Calculate Net Number of products
    const scrapNumber = Math.floor(PRODUCTION * SCRAP_PERCENTAGE);
    const netProducts = PRODUCTION - scrapNumber;

    // Round Scrap Percentage
    const scrapPercent =
      (Math.round(SCRAP_PERCENTAGE * Math.pow(10, 4)) / Math.pow(10, 4)) * 100;
    // Round Downtime Percentage
    const downtimePercent =
      (Math.round(DOWNTIME_PERCENTAGE * Math.pow(10, 3)) / Math.pow(10, 3)) *
      100;
    return setCalculatedData({
      produced: netProducts,
      scrap: scrapPercent,
      downtime: downtimePercent,
    });
  };

  useEffect(() => {
    calculateData();
  }, [PRODUCTION]);

  return calculatedData;
};
