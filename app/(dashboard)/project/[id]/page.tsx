import TaskCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: {
      id,
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { project };
};

export default async function ProjectPage({ params }) {
  const project = await getData(params.id);
  return (
    <div className="w-full h-full pr-6 overflow-y-auto">
      <TaskCard title={project.name} tasks={project.tasks} />
    </div>
  );
}
