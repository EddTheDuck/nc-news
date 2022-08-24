import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetTopics } from "../api";

const AllTopics = () => {
  const [topics, SetTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetTopics(topics).then((response) => {
      SetTopics(response.data.topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <ul className="Navlist">
      <Link to={"/"}>
        <li className="Navlist-item">Home</li>
      </Link>
      <li className="Navlist-item">Select Topic:</li>
      {topics.map(({ slug }) => {
        return (
          <Link to={`/articles/${slug}`} key={slug}>
            <li className="Navlist-item">{slug}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default AllTopics;
