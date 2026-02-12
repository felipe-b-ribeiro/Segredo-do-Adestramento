import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EbookPage from '../pages/EbookPage';
import Page404 from '../pages/Page404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
  },
  {
    path: "/ebook",
    element: <EbookPage />,
  },
  {
    path: '*',
    element: <Page404 />
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;