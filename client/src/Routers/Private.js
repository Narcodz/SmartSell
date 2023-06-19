import React from "react";
import { Route, Routes } from "react-router-dom";

const Private = ({ path, layout: Layout, component: Component }) => {
  console.log(path);
  return (
    <Routes>
      <Route
        path={path}
        element={
          <Layout>
            <Component />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Private;
