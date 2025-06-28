import {axiosInstance} from "./api.service.tsx";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import type {IMovieModel} from "../models/IMovieModel.ts";
import type {IBaseGenres} from "../models/IBaseGenres.ts";
import type {IBaseVideo} from "../models/IVideo.ts";
import type {IBaseSearchResult} from "../models/IBaseSearchResults.tsx";


export const movieService = {
    getMovies: (page: number, genreId?: number | null,): Promise<{ data: IBaseResponseModel }> =>
        axiosInstance.get(`/discover/movie`, {
            params: {
                with_genres: genreId,
                page,
            }
        }),
    getPopularMovies: (): Promise<{ data: IBaseResponseModel }> =>
        axiosInstance.get(`/movie/popular`,),

    getMovieById: (id: string): Promise<{ data: IMovieModel }> =>
        axiosInstance.get(`/movie/${id}`, {
            params: {append_to_response: 'videos,images'},
        }),
    getMovieVideos: (id: string): Promise<{ data: IBaseVideo }> =>
        axiosInstance.get(`/movie/${id}/videos`),

    getGenres: (): Promise<{ data: IBaseGenres }> =>
        axiosInstance.get(`/genre/movie/list`),

    searchMovies: (query: string | null, page: number): Promise<{ data: IBaseSearchResult }> =>
        axiosInstance.get(`/search/keyword`, {
            params: {query, page},
        }),
};