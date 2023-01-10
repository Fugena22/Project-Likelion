import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Overview from "./pages/OverviewPage/Overview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/overview",
      element: <Overview />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
