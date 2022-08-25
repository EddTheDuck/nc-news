import { useEffect, useState } from "react";
import { GetAnArticle } from "../api";
import { useParams } from "react-router-dom";
import Votes from "./Vote";

const AnArticle = () => {
  const { article_id } = useParams();
  const [anArticle, SetAnArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetAnArticle(article_id)
      .then((anArticle) => {
        SetAnArticle(anArticle);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <div>
      <b className="artNo">Article No: {anArticle.article_id}</b>
      <br />
      <br />
      <b>
        <u className=" artTitle"> {anArticle.title}</u>
      </b>
      <br />
      <br />
      <b>Cat: {anArticle.topic}</b>
      <br />
      <b> Created on {new Date(anArticle.created_at).toUTCString()}</b>
      <br />
      <b> By {anArticle.author}</b>
      <br />
      <br />
      {anArticle.body}
      <br />
      <br />
      <Votes
        article_id={article_id}
        votes={anArticle.votes}
        SetAnArticle={SetAnArticle}
      />
    </div>
  );
};

export default AnArticle;
