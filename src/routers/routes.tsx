import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import Home from "../themes/theme-one";
import Explore from "../themes/explore";
import ItemDetails from "../themes/item-details";
import Contact from "../themes/contact";

import Layout from "../components/Layout";

import { ContextProvider } from "../context";

const configRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/item-details/:id/:page",
    component: ItemDetails,
    title: "Details",
  },
  {
    path: "/contact",
    component: Contact,
    title: "Contact",
  },
  {
    path: "/original",
    component: Explore,
    title: "Original NFT",
  },
];

export const routes = configRoutes.map((route) => {
  return {
    path: route.path,
    component: route.component,
  };
});

const MyRouts = () => {
  return (
    <ContextProvider>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, i) => (
              <Route
                path={route.path}
                key={route.path + i}
                component={route.component}
                exact={true}
              />
            ))}
          </Switch>
        </Layout>
      </Router>
    </ContextProvider>
  );
};
export default MyRouts;
