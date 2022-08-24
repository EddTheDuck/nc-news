import { useEffect, useState } from "react";
import { GetAnArticle } from "../api";
import { useParams } from "react-router-dom";

const AnArticle = () => {
  const { article_id } = useParams();
  const [anArticle, SetAnArticle] = useState([]);
  //   const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    GetAnArticle(article_id).then((result) => {
      console.log(result.data.article, "<<<Result");
      SetAnArticle(result.data.article);
    });
  }, [article_id]);

  return (
    <p>
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
    </p>
  );
};

export default AnArticle;
