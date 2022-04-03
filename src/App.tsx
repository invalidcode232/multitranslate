import {
  ChakraProvider, theme
} from "@chakra-ui/react"
import * as React from "react"
import Navbar from "./components/navbar"
import Main from "./pages/main"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <Main/>
  </ChakraProvider>
)
