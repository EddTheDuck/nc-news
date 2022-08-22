import { GetArticles } from "../api";
import { useEffect, useState } from "react";
import { Article } from "../Components/Article";

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
        <Article articles={articles} />
      </div>
    );
  }
};

export default AllArticles;
