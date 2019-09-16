type GetQuery = (
  query: string,
) => {
  indexName: string;
  query: string;
  params: {};
};

export default GetQuery;
