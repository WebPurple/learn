import algoliasearch from 'algoliasearch';
import GetQuery from './interfaces/search.interfaces';

export const applicationId = 'X8XREZ5I2W';
export const apiKey = 'e234d10ed7fc53c09bb4d1a2f40f87dc';
export const indexName = 'search';
export const searchDelay = 300;
export const minCharsNumber = 3;
export const searchClient = algoliasearch(applicationId, apiKey);

export const getQuery: GetQuery = (query: string) => ({
  indexName,
  query,
  params: {},
});
