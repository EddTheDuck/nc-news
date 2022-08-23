import { Link } from "react-router-dom";

const AllTopics = (props) => {
  return (
    <section className="body">
      <h1>Select Topic</h1>
      {props.topics.map(({ slug }) => {
        return (
          <Link to={`/articles/${slug}`} key={slug}>
            <div className="topics">{slug}</div>
          </Link>
        );
      })}
    </section>
  );
};

export default AllTopics;
