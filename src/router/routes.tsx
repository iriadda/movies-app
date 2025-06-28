import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import MoviesDetailsPage from "../pages/MoviesDetailsPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: 'movie/:id', element: <MoviesDetailsPage/>},
            {path: 'search', element: <SearchPage/>}
        ]
    }
])