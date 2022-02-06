const ArticleListByCategory = (props) => {
  const { articles, category } = props;
  return (
    <div>
      <h1>Showing news for category: {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id}|{article.title}
            </h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  res.setHeader('Set-Cookie', 'name=Fozlol');
  console.log(query);
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
