import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to DUCK DUCK NEWS!</h1>
      <h2>
        Here you will find all the latest hot topics and trends from around the
        globe!
      </h2>
      <h3>What's Hot!?</h3>
      <p>3 WHATS HOT ARTICLES ARE HERE</p>
      <button>Random!</button>

      <button>Topics</button>

      <Link to="/articles">
        <button>All Articles</button>
      </Link>

      <button>Add Article</button>
    </div>
  );
};

export default HomePage;
