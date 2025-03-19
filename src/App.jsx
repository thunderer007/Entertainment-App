import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  Search,
  Series,
  BookmarkPage,
} from "./pages/index.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          element: <LandingPage />,
          index: true,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/series",
          element: <Series />,
        },
        {
          path: "/bookmark",
          element: <BookmarkPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
