import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Header/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Gellery from "./components/Gallery/Gellery";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        {
          path: "/gallery",
          element: <Gellery></Gellery>,
        },
        {
          path: "/news",
          element: <News></News>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
