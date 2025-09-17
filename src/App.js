import { Routes, Route, BrowserRouter } from "react-router-dom";
import WeatherApp from "./pages/Weather";
import NotFound from "./pages/404";
import Settings from "./pages/Settings";
import "./autoload";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WeatherApp />} />
        <Route path="weather" element={<WeatherApp />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
