import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Main from "./components/Main";
import customTheme from "./theme/theme";
import ItemsProvider from "./contexts/ItemsProvider";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ItemsProvider>
        <Main />
      </ItemsProvider>
    </ChakraProvider>
  );
}

export default App;
