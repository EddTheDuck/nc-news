import { GetArticles } from "../api";
import { useEffect, useState } from "react";
import { Article } from "../Components/Article";
import { useParams } from "react-router-dom";

const AllArticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    GetArticles(topic)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

  return (
    <div className="articles">
      <Article articles={articles} />
    </div>
  );
};

export default AllArticles;
