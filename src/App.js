import React from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import Prime from "./pages/Prime";
import Vanilla from "./pages/Vanilla";
import Todos from "./pages/Todos";

export const pathName = {
  HOME: "/",
  COUNTER: "/Counter",
  PRIME: "/Prime",
  VANILLA: "/Vanilla",
  TODOS: "/Todos",
  NOTFOUND: "*"
};

const useRoutes = [
  { path: pathName.HOME, component: <Home />, enabled: true },
  { path: pathName.COUNTER, component: <Counter />, enabled: true },
  { path: pathName.PRIME, component: <Prime />, enabled: true },
  { path: pathName.VANILLA, component: <Vanilla />, enabled: true },
  { path: pathName.TODOS, component: <Todos />,enabled: true },
  { path: pathName.NOTFOUND, component:<h1>PAGE NOT FOUND</h1>, enabled: true}
];

function App() {
  return (
    <Routes>
      {useRoutes
        .filter((route) => route.enabled)
        .map(({path,component}, i) => (
          <Route path={path} element={component} key={i} />
        ))}
    </Routes>
  );
}

export default App;
