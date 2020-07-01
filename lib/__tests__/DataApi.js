import DataApi from '../components/DataApi';

const data = {
  articles: [
    { id: 'Suneel', age: '41'},
    { id: 'Radhika', age: '42'},
    { id: 'Tanmay', age: '18'}
  ]
};
const  api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].id).toBe(articleId);


  });
});