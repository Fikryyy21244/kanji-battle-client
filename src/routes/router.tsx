import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/page";
import KanjiVocabulary from "../pages/KanjiVocabulary/page";
import TutorialPage from "../pages/Tutorial/page";
import CreditsPage from "../pages/Credits/page";

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
        path: "/kanji-vocabulary",
        element: <KanjiVocabulary />,
      },
      {
        path: "/tutorial",
        element: <TutorialPage />,
      },
      {
        path: "/credits",
        element: <CreditsPage />,
      },
    ],
  },
]);

export default router;
