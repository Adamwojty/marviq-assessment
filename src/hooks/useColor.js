import { useState, useEffect } from "react";

// GET MACHINE STATUS COLOR
export const useColor = (status, machine) => {
  const [machineStatus, setMachineStatus] = useState("white");

  const getColor = () => {
    if (status) {
      const item = Object.entries(status).filter((item) => item[0] === machine);
      const color = item[0][1].split("/");
      return setMachineStatus(color[1]);
    } else return;
  };
  useEffect(() => {
    getColor();
  }, [status]);
  return machineStatus;
};
