import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';  
import Nav from "./nav/nav";
import routes from "./routes";
import LayoutMain from "./layouts/layout_main"; 
import { GlobalProvider } from "./contexts/globalcontext"; // Import GlobalProvider
import "./styles/main.scss";  // Import the main global SCSS file
import "./styles/_theme.scss";  

function App() {
  return (
    // Wrap the entire app with GlobalProvider to provide global state
    <GlobalProvider> 
      <Router basename="/2of_site">
        <Routes>
          {/* Define the main layout route */}
          <Route element={<LayoutMain />}>
            {/* Dynamically render routes from the routes array */}
            {routes.map((route) => (
              <Route 
                key={route.path} 
                path={route.path} 
                element={route.element} 
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;