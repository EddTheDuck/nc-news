import { GetArticles } from "../api";
import { useEffect, useState } from "react";
import { Article } from "../Components/Article";
import { useParams } from "react-router-dom";

const AllArticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    GetArticles(topic, sort, order)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic, sort, order]);

  const changeSort = (event) => {
    console.log(event.target.value);
    setSort(event.target.value);
  };
  const changeOrder = (event) => {
    console.log(event.target.value);
    setOrder(event.target.value);
  };

  return (
    <div className="articles">
      <label htmlFor="DdLabel">Sort Articles By: </label>
      <select onChange={changeSort} name="DdMenu" id="DdMenu">
        <option value="title">Title</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="DdLabel">Order By: </label>
      <select onChange={changeOrder} name="DdMenu" id="DdMenu">
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      <Article articles={articles} />
    </div>
  );
};

export default AllArticles;

//  CREATE TABLE articles (
//     article_id SERIAL PRIMARY KEY,
//     title VARCHAR NOT NULL,
//     topic VARCHAR NOT NULL REFERENCES topics(slug),
//     author VARCHAR NOT NULL REFERENCES users(username),
//     body VARCHAR NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW(),
//     votes INT DEFAULT 0 NOT NULL
//   );`);
