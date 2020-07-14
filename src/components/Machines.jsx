import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MachineTile from "./MachineTile";
import Loading from "./Loading";

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ isLoading }) =>
    isLoading ? "center" : "space-evenly"};
  align-content: ${({ isLoading }) => (isLoading ? "center" : "start")};
  margin: 10px;
  min-height: 100vh;
`;

const Machines = () => {
  const data = useSelector((state) => state);
  const { isLoading, machines, status } = data;
  return (
    <Wrapper isLoading={isLoading}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {machines.map((machine) => (
            <MachineTile
              props={machine}
              key={machine.MACHINE}
              status={status}
            />
          ))}
        </>
      )}
    </Wrapper>
  );
};
export default Machines;
