import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthForm from "./pages/log-in/AuthForm.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import TVSeries from "./pages/TVSeries.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Trending from "./pages/Trending.jsx";
import Notfound from "./pages/Notfound.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import TopRated from "./pages/TopRated.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { createContext, useState } from "react";
import "./App.css";

export const DarkModeContext = createContext();

const queryClient = new QueryClient();


const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const myRouts = createBrowserRouter([
        { path: "/login", element: <AuthForm /> },
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/movies", element: <Movies /> },
                { path: "/tvseries", element: <TVSeries /> },
                { path: "/trending", element: <Trending /> },
                { path: "/upcoming", element: <Upcoming /> },
                { path: "/toprated", element: <TopRated /> },
                { path: "/movie/:id", element: <MovieDetails /> },
                { path: "*", element: <Notfound /> },
            ],
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                <div className={darkMode ? "dark-mode" : "light-mode"}>
                    <RouterProvider router={myRouts} />
                </div>
            </DarkModeContext.Provider>
        </QueryClientProvider>
    );
};

export default App;
