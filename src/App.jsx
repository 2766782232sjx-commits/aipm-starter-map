import { HashRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";

const App = () => (
  <HashRouter>
    <Routes>
      {navItems.map(({ to, page }) => (
        <Route key={to} path={to} element={page} />
      ))}
    </Routes>
  </HashRouter>
);

export default App;
