import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
// import AddQuote from "./pages/AddQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import NoQuote from './pages/NoQuote.js';
import Layout from "./components/layout/Layout";

//Lazy-Loading -> when we send request to server it gave us the whole code bundled in which we might
// not want some pages or some components (imports) at that moment so we don't download those
//and only download those when needed using lazy loading as below

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NoQuote = React.lazy(() => import("./pages/NoQuote"));

//when we are importing conditionally it takes some time that's why suspense is used with a fallback

function App() {
  //exact -> so that to match the exactly same link other wise it will execute for every link which starts wth '/'
  //switch -> so as to only render one route coz if not switch then all routes whose path is a subset of url will render
  // with switch only !st route which satisfies the condition will render
  return (
    <Layout>
      <Suspense fallback={<p>loading data...</p>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/new-quote">
            <AddQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NoQuote />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
