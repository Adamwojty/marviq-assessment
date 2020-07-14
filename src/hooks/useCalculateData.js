import { useState, useEffect } from "react";

export const useCalculateData = (production, scrap, downtime) => {
  const [calculatedData, setCalculatedData] = useState({});
  const calculateData = () => {
    // Calculate Net Number of products
    const scrapNumber = Math.floor(production * scrap);
    const netProducts = production - scrapNumber;

    // Round Scrap Percentage
    const scrapPercent =
      (Math.round(scrap * Math.pow(10, 4)) / Math.pow(10, 4)) * 100;
    // Round Downtime Percentage
    const downtimePercent =
      (Math.round(downtime * Math.pow(10, 3)) / Math.pow(10, 3)) * 100;
    return setCalculatedData({
      produced: netProducts,
      scrap: scrapPercent,
      downtime: downtimePercent,
    });
  };

  useEffect(() => {
    calculateData();
  }, [production]);

  return calculatedData;
};
