import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import customTheme from './components/theme/custom_theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Navbar } from './components/design/navbar/Navbar';

// Routes
import { Home } from './components/design/home/Home';
import { List } from './components/design/list/List';
import { Swipe } from './components/design/swipe/Swipe';
import { Login } from './components/design/login/Login';
import { Rate } from './components/design/rate/Rate';
import { New } from './components/design/new/New';

function AppBase(): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    return (
        <Router>
            {!cookies?.auth ? <Redirect to="/login" /> : <Navbar />}

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/list">
                    <List />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/rate">
                    <Rate />
                </Route>
                <Route path="/new">
                    <New />
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
