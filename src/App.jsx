import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
