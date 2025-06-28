import type {IMovieShortModel} from "./IMovieModel.ts";


export interface IBaseResponseModel {
  page: number;
  results: IMovieShortModel[];
  total_pages: number;
  total_results: number;
}