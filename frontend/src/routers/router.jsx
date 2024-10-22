import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/home/Home";
import Categorypage from "../Pages/category/Categorypage";
import Search from "../Pages/Search/Search";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element:  <Home/> }, // Home route
        {
          path: "/categories/:categoryName", // Dynamic category route
          element:  <Categorypage/>
        },
        {
          path: "/search", // Catch-all route for 404
          element: <Search/>
        }
      ],
    },
]);

export default router;
