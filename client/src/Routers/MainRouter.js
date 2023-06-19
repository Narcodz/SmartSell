import { BrowserRouter } from "react-router-dom";
import { routes } from "./routeConfig";
import Private from "./Private";

const MainRouter = () => {
  return (
    <BrowserRouter>
        {routes.map((routerData) => {
          return (
            <>
            <Private
              path={routerData.path}
              component={routerData.component}
              layout={routerData.layout}
              name={routerData.name}
              permissions={routerData.permissions}
            />
            </>
          );
        })}
    </BrowserRouter>
  );
};

export default MainRouter;
