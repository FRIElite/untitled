import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/design/home/Home';
import customTheme from './components/theme/custom_theme';


function AppBase(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
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
