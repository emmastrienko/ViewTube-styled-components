import React, { useState } from 'react';
import './App.css';
import Header from './views/Header';
import Videos from './views/Playlist';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { darkTheme, lightTheme } from './theme/themes';

// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;


function App() {
  // 3: Get the selected theme, font list, etc.

  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container >
          <Header toggleTheme={themeToggler} />
          <Videos />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
