import { AddVotes } from "../api";
import { useState } from "react";

const Votes = ({ votes, article_id, SetAnArticle }) => {
  const [voteIncrement, setVoteIncrement] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);

  const changeVotes = (votes) => {
    setVoteIncrement((currVoteIncrement) => {
      setHasClicked(true);

      return currVoteIncrement + 1;
    });
    AddVotes(article_id, votes)
      .then((article) => {
        SetAnArticle(article);
        setVoteIncrement(0);
      })
      .catch((err) => {
        console.log(err);
        setVoteIncrement(0);
      });
  };
  if (!hasClicked) {
    return (
      <div className="article-small">
        <p>{votes + voteIncrement}</p>
        <button onClick={() => changeVotes(1)}>Vote up!</button>
        <button onClick={() => changeVotes(-1)}>Vote Down!</button>
      </div>
    );
  }
  return <div className="article-small">Votes: {votes + voteIncrement}</div>;
};

export default Votes;
