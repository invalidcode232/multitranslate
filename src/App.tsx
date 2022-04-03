import {
  ChakraProvider, extendTheme,
} from "@chakra-ui/react"
import * as React from "react"
import Navbar from "./components/navbar"
import Main from "./pages/main"

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      box: {
        default: 'gray.200',
        _dark: 'gray.700',
      }
    }
  }
});

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Navbar/>
    <Main/>
  </ChakraProvider>
)
