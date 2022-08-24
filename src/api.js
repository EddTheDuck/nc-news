import axios from "axios";

export function GetArticles(topic) {
  return axios.get("https://egg-news.herokuapp.com/api/articles", {
    params: { topic: topic },
  });
}

export function GetTopics() {
  return axios.get("https://egg-news.herokuapp.com/api/topics");
}

export function GetAnArticle(article_id) {
  return axios.get(`https://egg-news.herokuapp.com/api/articles/${article_id}`);
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
