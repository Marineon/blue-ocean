
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Themes from '../shared/styles/themes';
import '../shared/styles/App.css';

import Home from './Home';
import DarkModeSwitch from './DarkModeSwitch';
import GetImagesTemp from './GetImagesTemp/GetImagesTemp';
import UserContextProvider from '../contexts/user-context';
import PhotosContextProvider from '../contexts/photos-context';
import TestPage from './TestPage/TestPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appliedTheme = createMuiTheme(darkMode ? Themes.dark : Themes.light)

  return (
    <Router>
      <React.Fragment>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <Container className="App">
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            <UserContextProvider>
              <PhotosContextProvider>
                <Switch>
                  <Route exact path="/" ><Home /></Route>
                  <Route exact path="/getimagestemp" ><GetImagesTemp /></Route>
                </Switch>
              </PhotosContextProvider>
            </UserContextProvider>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    </Router>
  );
}

export default App;
