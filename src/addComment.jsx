import { useEffect } from "react";
import { useParams, useState } from "react-router-dom";
import { addComment } from "./api";

const AddAComment = () => {
  const { article_id } = useParams();
  const [addsComment, setAddsComment] = useState([]);

  useEffect(() => {
    addComment(article_id).then((response) => {
      setAddsComment(response.data.comments);
    });
  });
};

export default AddAComment;
