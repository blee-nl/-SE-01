import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import { MainPage } from "~/pages";
import { Header } from "~/components";
// Lazy-loaded search results page
const SearchResultsPage = React.lazy(() => import("~/pages/SearchResultsPage"));

const RootRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* Page is shown after user searched items from search box. */}
        {/* Show loading animation when results is loading */}
        <Route
          exact
          path="/products"
          render={() => (
            <React.Suspense fallback={<div>Loading</div>}>
              <SearchResultsPage />
            </React.Suspense>
          )}
        />
      </Switch>
    </Router>
  );
};

export default RootRouter;
