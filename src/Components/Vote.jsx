import { AddVotes } from "../api";
import { useState } from "react";

const Votes = ({ votes, article_id }) => {
  console.log(votes, "<<<<votes");
  console.log(article_id, "<<<<article_id");
  const [voteIncrement, setVoteIncrement] = useState(0);

  const incrementVotesUp = () => {
    setVoteIncrement((currVoteIncrement) => {
      return currVoteIncrement + 1;
    });
    AddVotes(article_id).catch(() => {
      setVoteIncrement((currVoteIncrement) => {
        return currVoteIncrement - 1;
      });
    });
  };
  const incrementVotesDown = () => {
    setVoteIncrement((currVoteIncrement) => {
      return currVoteIncrement - 1;
    });
    AddVotes(article_id).catch(() => {
      setVoteIncrement((currVoteIncrement) => {
        return currVoteIncrement + 1;
      });
    });
  };
  if (voteIncrement === 0) {
    return (
      <div className="article-small">
        {votes + voteIncrement}
        <button onClick={incrementVotesUp}>Vote up!</button>
        <button onClick={incrementVotesDown}>Vote Down!</button>
      </div>
    );
  } else {
    return <div className="article-small">Votes: {votes + voteIncrement}</div>;
  }
};

export default Votes;
