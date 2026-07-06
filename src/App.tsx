import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./components/Home"
import Navbar from "./components/navigation/Navbar"
import "./styles/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme"
import Navigation from "./components/navigation/Navigation"

 

export default function App(){
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navigation />
        <Home/>
      </BrowserRouter>
    </ChakraProvider>
  );
}
