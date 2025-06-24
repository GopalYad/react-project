import React from "react";
import {  Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./components/appbar/index";
const Ecommerce = () => {
  useEffect(() => {
    document.title = `Ecommerce `;
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <AppBar/>
      <Button variant="contained">Test</Button>
   
      </Container>
    </ThemeProvider>
  );
};

export default Ecommerce;
