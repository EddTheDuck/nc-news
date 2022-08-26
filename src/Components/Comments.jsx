import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";

const ViewComments = () => {
  const { article_id } = useParams();
  const [availableComments, setAvailableComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        console.log(response, "<<<response");
        setAvailableComments(response.data.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return isLoading ? (
    <h3>Here come the comments!</h3>
  ) : (
    <section className="body">
      {availableComments < 1 ? (
        <h3>No comments</h3>
      ) : (
        <h4>{availableComments.length} Comments</h4>
      )}
      {availableComments.map(({ body, comment_id, author }) => {
        return (
          <div className="articleList-item" key={comment_id}>
            <div className="article">{body}</div>
            <div className="article-small">By: {author}</div>
          </div>
        );
      })}
    </section>
  );
};
export default ViewComments;
