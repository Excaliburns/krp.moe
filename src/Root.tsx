import * as React from 'react';
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";

// https://coolors.co/2d3047-95b8d1-a2c7e5-d782ba-eeb1d5
const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, serif;
    background-color: var(--background);
    
    --background: #2d3047ff;
    --highlight1: #5F6695;
    --text: #AFCFE9;
    --shadow: #d782baff;
    --highlight2: #eeb1d5ff;
    --favorite-bezier: cubic-bezier(0,.02,0,1.35);
    
    font-size: 16px;
    color: var(--text);
  }
`

/*
    Fade in gif, buttons
    typewriter short description
 */

const Root = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <Helmet>
                <title>Kevin Patlis' Website</title>
                <meta name={"description"} content={"Website Content"}/>
            </Helmet>

            <Router>
                <Route path={"/"}>
                    <HomePage />
                </Route>

            </Router>
        </>
    )
}

export default Root