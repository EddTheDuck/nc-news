import { useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../api";

const CreateComment = () => {
  const [data, setData] = useState(null);
  const [post, setPost] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  const getData = (data) => {
    setData(data.target.value);
  };

  const handlePost = (event) => {
    setPost(true);
    addComment(article_id, data).catch(() => {
      setError(() => {
        return setError(true);
      });
    });
  };
  if (!error) {
    if (post) {
      return (
        <div>
          <h3>Your comment has been added!</h3>
        </div>
      );
    }
    return (
      <main>
        <form>
          <textarea
            onChange={getData}
            placeholder="Write your comment here!"
          ></textarea>
          <button
            type="button"
            onClick={() => {
              handlePost();
            }}
          >
            Post your comment!
          </button>
        </form>
      </main>
    );
  } else {
    return <h3>An error has occured, try again later!</h3>;
  }
};
export default CreateComment;
