import { useEffect, useState } from "react";
import { GetTopics } from "../api";

export default function NavBar() {
  const [topics, SetTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetTopics(topics).then((response) => {
      SetTopics(response.data.topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>DUCK DUCK WAIT! IT'S STILL LOADING!</p>;
  } else {
    return <div></div>;
  }
}
