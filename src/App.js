import "./App.css";
import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import AllArticles from "./Components/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">DUCK DUCK NEWS</header>
      </div>
      <div>
        <AllArticles />
      </div>
    </BrowserRouter>
  );
}

export default App;

// All Endpoints
// app.get("/api/topics", getTopics);
// app.get("/api/articles/:article_id", getArticlesById);
// app.patch("/api/articles/:article_id", patchVotes);
// app.get("/api/users", getUsers);
// app.get("/api/articles", getArticles);
// app.get("/api/articles/:article_id/comments", getArticleComments);
// app.post("/api/articles/:article_id/comments", postComment);
// app.delete("/api/comments/:comment_id", deleteCommentbyId);
