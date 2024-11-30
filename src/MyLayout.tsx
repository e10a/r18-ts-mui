import * as React from "react";

interface MyLayoutprops {}

const MyLayout: React.FC = ({ children, history }) => {
  return (
    <div>
      {children}

      <button onClick={() => history.push("/bar")}>click</button>
    </div>
  );
};

export default MyLayout;
