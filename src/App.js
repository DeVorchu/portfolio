import { useState } from 'react';
import Layout from './containers/Layout'
import {ThemeContext, ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme} from './styles/globals/themes.js'
import {langPl, langEn} from './Utils/langs.js'
import { AppStyleWrapper } from './styles/globals/main.styled';
import {LangContext} from './Context/langContext.js'

function App() {

  const [themeState, setThemeState] = useState('dark')
  const [languageState, setLanguageState] = useState('pl')

  const handleTheme = () =>{
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }

  const handleLanguage = () =>{
    languageState === 'pl' ? setLanguageState('en') : setLanguageState('pl')
  }

  return (
    <LangContext.Provider value={languageState ==='pl'? langPl : langEn}>
      <ThemeProvider theme={themeState ==='light'? lightTheme : darkTheme}>
        <AppStyleWrapper />
        <Layout />  
      </ThemeProvider>
    </LangContext.Provider>
  );
}

export default App;
