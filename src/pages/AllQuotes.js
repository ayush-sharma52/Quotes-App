import QuoteList from "../components/quotes/QuoteList.js";
import { getAllQuotes } from "../lib/api.js";
import useHttp from "../hooks/use-http";
import NoQuote from "./NoQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect, useState } from "react";

function AllQuotes() {
  const { sendRequest, status, error, data } = useHttp(getAllQuotes, true);
  const [quotes, setQuotes] = useState([]);
  // sendRequest(); //will cause infinite loop
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  //if we hadn't wrapped this send request() in usehttp in callback then infinit loop starts

  useEffect(() => {
    if (status === "completed") setQuotes(data);
  }, [status, data]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focus">{error}</p>;
  }
  if (!quotes || quotes.length === 0) {
    return <NoQuote />;
  }

  return <QuoteList quotes={quotes} />;
}
export default AllQuotes;
