import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CoursePageSection from "../components/CoursePage/CourePageSection";
import ErrorPage from "../components/Error/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import AltNav from "../components/Navbar/AltNav";
import Register from "../components/Register/Register";
import Layout from "../layouts/Layout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <AltNav></AltNav>
        <ErrorPage></ErrorPage>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/course/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://pathshala-server.vercel.app/course/${params.id}`
          );
        },
        element: (
          <>
            <CoursePageSection />
          </>
        ),
        errorElement: (
          <div>
            <ErrorPage />
          </div>
        ),
      },
      {
        path: "/coureDetails/:id",
        element: (
          <>
            <CourseDetails />
          </>
        ),
        errorElement: (
          <div>
            <ErrorPage />
          </div>
        ),
      },
      {
        path: "/checkout/:id",
        loader: async ({ params }) => {
          return fetch(`https://pathshala-server.vercel.app/course/:id`);
        },
        element: (
          <>
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          </>
        ),
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/FAQ",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
