import axios from "axios";

export function GetArticles(topic) {
  return axios
    .get("https://egg-news.herokuapp.com/api/articles", {
      params: { topic: topic },
    })
    .then((result) => {
      return result.data.articles;
    });
}

export function GetTopics() {
  return axios
    .get("https://egg-news.herokuapp.com/api/topics")
    .then((result) => {
      return result.data.topics;
    });
}

export function GetAnArticle(article_id) {
  return axios
    .get(`https://egg-news.herokuapp.com/api/articles/${article_id}`)
    .then((result) => {
      return result.data.article;
    });
}

export function AddVotes(article_id, votes) {
  return axios
    .patch(`https://egg-news.herokuapp.com/api/articles/${article_id}`, {
      votes,
    })
    .then((result) => {
      return result.data.article;
    });
}

export function getComments(article_id) {
  return axios.get(
    `https://egg-news.herokuapp.com/api/articles/${article_id}/comments`
  );
}

export function addComment(article_id) {
  return axios.get(
    `https://egg-news.herokuapp.com/api/articles/${article_id}/comments`
  );
}
// All Endpoints
// app.get("/api/topics", getTopics);
// app.get("/api/articles/:article_id", getArticlesById);
// app.patch("/api/articles/:article_id", patchVotes);
// app.get("/api/users", getUsers);
// app.get("/api/articles", getArticles);
// app.get("/api/articles/:article_id/comments", getArticleComments);
// app.post("/api/articles/:article_id/comments", postComment);
// app.delete("/api/comments/:comment_id", deleteCommentbyId);
