import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/page";
import TutorialPage from "../pages/Tutorial/page";
import AboutPage from "../pages/About/page";
import LearningPage from "../pages/Learning/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/learning",
        element: <LearningPage />,
      },

      {
        path: "/about-app",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
