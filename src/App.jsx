import React, { useEffect } from "react";
import { fetchItems, fetchStatus, fetchOEE } from "./config/redux/actions";
import { useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import Machines from "./components/Machines";

// RESET STYLES
const GlobalStyle = createGlobalStyle`
  ${reset}
  body {    
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    box-sizing:border-box;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  // FETCH DATA
  useEffect(() => {
    fetchItems(dispatch);
    fetchStatus(dispatch);
    fetchOEE(dispatch);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Machines />
    </>
  );
};

export default App;
