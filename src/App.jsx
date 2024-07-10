import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TvShows from "./pages/tvShows";
import Discover from "./pages/discover";
import Container from "./components/container";

function App() {
  const router = createBrowserRouter(
    [
      { path: "/", element: <TvShows /> },
      { path: "/tvshows", element: <TvShows /> },
      { path: "/discover", element: <Discover /> },
    ],
    { basename: import.meta.env.BASE_URL }
  );
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
