import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-ahfahasan786-gmailcom.vercel.app/categories/${params.id}`),
      },
    ],
  },

  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-ahfahasan786-gmailcom.vercel.app/news/${params.id}`)
      },
    ],
  },
]);

export default router;
