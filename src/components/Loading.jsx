import React from "react";
import styled, { keyframes } from "styled-components";

const load = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;
const Loader = styled.div`
  width: 80px;
  height: 80px;
  ::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: ${load} 1.2s linear infinite;
  }
`;

const Loading = () => <Loader />;
export default Loading;
