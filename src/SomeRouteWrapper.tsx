import * as React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

interface SomeRouteWrapperProps {}

const SomeRouteWrapper: React.FC<SomeRouteWrapperProps> = ({
  component: Component,
  location,
}: {
  component: React.FC | React.ComponentClass;
  location: RouteComponentProps["location"];
}) => {
  return (
    <Route
      render={() => {
        if (Math.random() === 1) {
          return React.createElement(Component, null, null);
        }
        return <Redirect to={{ pathname: "/", state: { from: location } }} />;
      }}
    />
  );
};

export default SomeRouteWrapper;
