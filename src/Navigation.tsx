import * as React from "react";
import { NavLink } from "react-router-dom";
import routes from "./routes";

export default function Navigation() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={Math.random()}>
            <NavLink to={route.path}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
