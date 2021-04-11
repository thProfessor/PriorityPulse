import "./App.css";
import IndexPage from "./pages";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./componenents/Header";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../src/context/globalContext";
import CustomCursor from "./componenents/customCursor";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  cursor:none;
}
body{
  background:${(props) => props.theme.background};
  overflow-x:hidden;
  color:${(props) => props.theme.text}
}
`;

function App() {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles, currentTheme } = useGlobalStateContext();
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  });

  const [toggleMenu, setToggleMenu] = useState(false);

  const darkTheme = {
    background: "#a4c3b2",
    text: "#fff",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const lightTheme = {
    background: "#fff",
    text: "#a4c3b2",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />

        <CustomCursor toggleMenu={toggleMenu} />
        <Header
          onCursor={onCursor}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          hamburgerPosition={hamburgerPosition}
          setHamburgerPosition={setHamburgerPosition}
        />
        <Router>
          <IndexPage />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
