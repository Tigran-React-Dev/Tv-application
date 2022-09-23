import React from "react";
import { Redirect, Route, Switch ,useHistory} from "react-router-dom";
import { HOME_PAGE, MOVIES } from "../urls";
import { routes } from "./../routies";

const Routing = () => {

  const history =useHistory();

  if(history.location.pathname=="/"){
    history.push(HOME_PAGE)
 }

  return (
    <Switch>
      {routes.map(({ id, path, exect, component }) => {
        return <Route key={id} path={path} exact={exect} component={component} />;
      })}
      
    </Switch>
  );
};

export default Routing;
