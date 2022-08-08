import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const params = useParams();
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) onAddComment();
  }, [onAddComment, error, status]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here

    // send comment to server
    sendRequest({
      commentData: commentTextRef.current.value,
      quoteId: params.quoteId,
    });
  };

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && <LoadingSpinner className="centered" />}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
