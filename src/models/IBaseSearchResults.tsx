export interface ISearchResults {
  id: number;
  name: string;
}

export interface IBaseSearchResult {
  page: number;
  results: ISearchResults[];
  total_pages: number;
  total_results: number;
}