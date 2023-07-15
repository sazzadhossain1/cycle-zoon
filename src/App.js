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
import DiscoverDetailsPage from "./components/DiscoverDetailsPage/DiscoverDetailsPage";
import ViewMore from "./components/ViewMore/ViewMore";
import NewsSeeMore from "./components/NewsSeeMore/NewsSeeMore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://cycle-zoon-two-server.vercel.app/cycleData/");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("https://cycle-zoon-two-server.vercel.app/cycleData/");
          },
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/shop",
          loader: () => {
            return fetch("shop.json");
          },
          element: <Shop></Shop>,
        },
        {
          path: "/gallery",
          element: <Gellery></Gellery>,
        },
        {
          path: "/news",
          loader: () => {
            return fetch("https://cycle-zoon-two-server.vercel.app/newsData");
          },
          element: <News></News>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/viewMore",
          element: <ViewMore></ViewMore>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/discoverDetailsPage/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://cycle-zoon-two-server.vercel.app/cycleData/${params.id}`
            );
          },
          element: <DiscoverDetailsPage></DiscoverDetailsPage>,
        },
        {
          path: "/newsSeeMore/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://cycle-zoon-two-server.vercel.app/newsData/${params.id}`
            );
          },
          element: <NewsSeeMore></NewsSeeMore>,
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
