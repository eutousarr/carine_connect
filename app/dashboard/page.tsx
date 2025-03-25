import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import StudentsTable from "@/components/students/StudentsTable";
import CustomChart from '@/components/dashboard/CustomChart';
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import eleves from "@/data/students";
import posts from "@/data/posts";
import Bulletin from "@/components/bulletin";

export default function Home() {
  const filles = eleves.filter((eleve) => eleve.sexe === "Feminin").length;
  const garcons = eleves.filter((eleve) => eleve.sexe === "Masculin").length;
  return (
    <>
    {eleves.map((eleve) => (
      <Bulletin eleve={{ ...eleve, id: eleve.id }} key={eleve.id} />
    ))}
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Articles"
          count={posts.length}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Eleves"
          count={eleves.length}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Filles"
          count={filles}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Garçons"
          count={garcons}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      <CustomChart />
      <PostsTable title="Latest Posts" limit={1000} />
      <StudentsTable title="LES ELEVES" limit={10} />
    </>
  );
}
