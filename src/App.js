import React from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import Prime from "./pages/Prime";
import Vanilla from "./pages/Vanilla";

export const pathName = {
  HOME: "/",
  COUNTER: "/Counter",
  PRIME: "/Prime",
  VANILLA: "/Vanilla",
};

const useRoutes = [
  { path: pathName.HOME, component: <Home />, enabled: true },
  { path: pathName.COUNTER, component: <Counter />, enabled: true },
  { path: pathName.PRIME, component: <Prime />, enabled: true },
  { path: pathName.VANILLA, component: <Vanilla />, enabled: true },
];

function App() {
  return (
    <Routes>
      {useRoutes
        .filter((route) => route.enabled)
        .map((route, i) => (
          <Route path={route.path} element={route.component} key={i} />
        ))}
    </Routes>
  );
}

export default App;
