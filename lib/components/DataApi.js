class DataApi {

  data = {
    articles: [
      { id: 'Suneel', age: '41'},
      { id: 'Radhika', age: '42'},
      { id: 'Tanmay', age: '18'}
    ]
  };

  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.data.articles);
  }
}

export default DataApi;