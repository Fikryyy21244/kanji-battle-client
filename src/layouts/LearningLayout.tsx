import { Outlet } from "react-router-dom";
import TopBar from "../components/common/TopBar";
import BackButton from "../components/common/BackButton";

export default function LearningLayout() {
  return (
    <section>
      <div className="w-full max-w-6xl mx-auto">
        <TopBar />
        <BackButton />

        <Outlet />
      </div>
    </section>
  );
}
