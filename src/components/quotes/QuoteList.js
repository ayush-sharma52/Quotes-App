import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1; //-ve a and b same , +ve then (b,a)
    }
  });
};

//query params->starts with a ? and no effect on router as router will not consider them when parsing the url
const QuoteList = (props) => {
  //will give information about the url we are currently on as key value pairs
  const location = useLocation();
  const history = useHistory();
  //it will create a object which converts the search key's value string as a key value pair
  const queryParams = new URLSearchParams(location.search); //browser api

  //way of getting value of a query param out of the object containing all
  //when we dont pass any query param then the above method will return null and quotes will be arranged in descending order
  const isAscending = queryParams.get("sort") === "asc";

  let sortedQuotes = sortQuotes(props.quotes, isAscending);

  const sortingHandler = () => {
    history.push(`${location.pathname}?sort=${isAscending ? "desc" : "asc"}`);
    //  or
    //  history.push({
    //     pathname:location.pathname,
    //     search:`sort=${isAscending ? 'desc' : 'asc'}`,
    //   })
  };

  return (
    <Fragment>
      <button onClick={sortingHandler} className="btn--flat">
        Sort {isAscending ? "Descending" : "Ascending"}
      </button>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
