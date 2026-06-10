import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/page";
import TutorialPage from "../pages/Tutorial/page";
import AboutPage from "../pages/About/page";
import LearningPage from "../pages/Learning/page";
import KanjiPage from "../pages/Learning/kanji/page";
import LearningLayout from "../layouts/LearningLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Learning
      {
        path: "/learning",
        element: <LearningLayout />,
        children: [
          {
            index: true,
            element: <LearningPage />,
          },
          {
            path: "kanji",
            element: <KanjiPage />,
          },
        ],
      },

      {
        path: "/about-app",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
