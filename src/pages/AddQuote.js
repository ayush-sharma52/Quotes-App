import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

function AddQuote() {
  const history = useHistory();
  const { sendRequest: postQuote, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status,history]);

  const addQuoteHandler = async (quote) => {
    postQuote(quote);
    // history.push("/quotes");
    // the states are scheduled so if we go back to the quotes page now it means we didn't waited for the states to change
    //and didn't displayed different UI's based on them so we should only go back to quotes page when the state gets changed
    //to completed and hence we know all required UI's got rendered and now we can go back
  };

  return (
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
  );
}
export default AddQuote;
