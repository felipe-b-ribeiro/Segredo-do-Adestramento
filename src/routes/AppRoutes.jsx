import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EbookPage from '../pages/EbookPage';
import Page404 from '../pages/Page404';
import TermosPage from '../pages/TermosPage';
import PrivacidadePage from '../pages/PrivacidadePage';
import ReembolsoPage from '../pages/ReembolsoPage';

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
    path: "/termos",
    element: <TermosPage />,
  },
  {
    path: "/privacidade",
    element: <PrivacidadePage />,
  },
  {
    path: "/reembolso",
    element: <ReembolsoPage />,
  },
  {
    path: '*',
    element: <Page404 />
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;