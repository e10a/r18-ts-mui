import * as React from "react";

interface MyLayoutProps {
  children: React.ReactNode;
  history: {
    push: (path: string) => void;
  };
}

const MyLayout: React.FC<MyLayoutProps> = ({ children, history }) => {
  return (
    <div>
      {children}

      <button onClick={() => history.push("/bar")}>click</button>
    </div>
  );
};

export default MyLayout;
