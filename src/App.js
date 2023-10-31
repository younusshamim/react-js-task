import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Main from "./components/Main";
import customTheme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
