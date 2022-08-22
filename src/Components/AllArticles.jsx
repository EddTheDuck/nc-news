import { GetArticles } from "../api";
import { useEffect, useState } from "react";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetArticles().then((result) => {
      setArticles(result.data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>DUCK DUCK WAIT IT'S STILL LOADING!</p>;
  } else {
    return (
      <div className="articles">
        {articles.map((article) => {
          return (
            <p className="article">
              <b className="artNo">Article No: {article.article_id}</b>
              <br />
              <br />
              <b>
                <u className=" artTitle"> {article.title}</u>
              </b>
              <br />
              <br />
              <b>Cat: {article.topic}</b>
              <br />

              <b> Created at {article.created_at}</b>
              <br />

              <b> By {article.author}</b>
              <br />
              <br />
              {article.body}
              <br />
            </p>
          );
        })}
      </div>
    );
  }
};

export default AllArticles;
