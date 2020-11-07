import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider, useColorMode } from '@chakra-ui/core';
import customTheme from './components/theme/custom_theme';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import { Navbar } from './components/design/navbar/Navbar';

// Routes
import { Home } from './components/design/home/Home';
import { List } from './components/design/list/List';
import { Swipe } from './components/design/swipe/Swipe';

function AppBase(): ReactElement {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path="/list">
                    <List />
                </Route>
                <Route exact path="/swipe">
                    <Swipe />
                </Route>
            </Switch>
        </Router>
    );
}

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <ColorModeProvider>
                <CSSReset />
                <AppBase />
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default App;
