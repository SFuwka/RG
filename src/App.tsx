import { ThemeProvider } from "@material-ui/styles";
import { defaultTheme } from "./app/theme";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation/>
    </ThemeProvider>
  );
}

export default App;
