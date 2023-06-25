import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./Home/HomePage";
import PortfolioPage from "./Portfolio/PortfolioPage";
import ResumePage from "./Resume/ResumePage";
import { createRoot } from 'react-dom/client';
import React, { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import '@fontsource/roboto/latin.css'

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

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<HomePage />}>
            <Route path={"portfolio"} element={<PortfolioPage />} />
            <Route path={"resume"} element={<ResumePage />} />
        </Route>
    )
)


root.render(
    <StrictMode>
        <GlobalStyle />
        <Helmet>
            <title>Kevin Patlis' Website</title>
            <meta name={"description"} content={"Website Content"}/>
        </Helmet>
        <RouterProvider router={router} />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
