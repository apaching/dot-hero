import HomeScreen from "./pages/HomeScreen";

import "@mantine/core/styles.css";

import { createTheme, Loader, MantineProvider } from "@mantine/core";
import { CssLoader } from "./utils/CssLoader";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DetailScreen from "./pages/DetailScreen";

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: "custom",
      },
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/hero" element={<DetailScreen />} />
          <Route path="/hero/:id/:name" element={<DetailScreen />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;

// /:name/:id
