import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api.js";

// useRouteMatch() vs useLocation()
// the match.path returns the path of the route which renders the component in which  we are using the match()
// same for the match.url whereas the location.pathName will always return the path at which we are currently at
//i.e:- which is in the browser search bar(root-relative path). there is no url key in location object too.
//hence we use the match.url or match.path to append something to the path of the router that is activated

function QuoteDetails() {
  const params = useParams();
  //unlike useLocation it also gives us the url we are currently at
  const match = useRouteMatch();
  const {
    sendRequest: sendingRequest,
    status,
    error,
    data,
  } = useHttp(getSingleQuote, true);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    sendingRequest(params.quoteId);
  }, [sendingRequest, params.quoteId]);

  useEffect(() => {
    if (status === "completed") setQuote(data);
  }, [setQuote, status, data]);

  if (status === "pending") return <LoadingSpinner className="centered" />;

  if (error) return <p className="centered">{error}</p>;

  if (!quote.text) return <p>No Quote Found</p>;

  return (
    //to understand match.path  and match.url refer above comment
    <>
      <h1>Quote Details</h1>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Switch>
        <Route path={match.path} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Switch>
    </>
  );
}
export default QuoteDetails;
