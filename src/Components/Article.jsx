export function Article(articles) {
  console.log(articles);
  return articles.articles.map((article) => {
    return (
      <p className="article">
        <b className="artNo">Article No: {article.article_id}</b>
        <br />
        <br />
        <b>
          <u className=" artTitle"> {article.title}</u>
        </b>
        <br />
        <br />
        <b>Cat: {article.topic}</b>
        <br />
        <b> Created at {new Date(article.created_at).toUTCString()}</b>
        <br />
        <b> By {article.author}</b>
        <br />
        <br />
        {article.body}
        <br />
      </p>
    );
  });
}
