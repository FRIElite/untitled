import React, { ReactElement } from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import customTheme from './components/theme/custom_theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/design/home/Home';

function AppBase(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
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
