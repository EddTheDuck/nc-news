import { GetArticles } from "../api";
import { useEffect, useState } from "react";
import { Article } from "../Components/Article";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    GetArticles().then((result) => {
      setArticles(result.data.articles);
    });
  }, []);

  return (
    <div className="articles">
      <Article articles={articles} />
    </div>
  );
};

export default AllArticles;
