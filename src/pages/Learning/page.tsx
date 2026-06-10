import BackButton from "../../components/common/BackButton";
import PageHeader from "../../components/common/PageHeader";
import TopBar from "../../components/common/TopBar";
import LearningMenuItem from "../../components/learning/LearningMenuItem";
import { learningMenus } from "../../datas/learningMenus";

export default function LearningPage() {
  return (
    <div>
      <div className="my-10">
        <PageHeader color="text-black">LEARNING HUB</PageHeader>
      </div>

      {/* Learning Menu */}
      <div className="flex flex-col my-6">
        {learningMenus.map((item, i) => (
          <LearningMenuItem key={i} href={item.path} title={item.title} />
        ))}
      </div>
    </div>
  );
}
