import ProjectTaskCard from "@/components/ProjectTaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { Task } from "@prisma/client";

export async function generateStaticParams() {
  const projects = await db.project.findMany({
    include: {
      tasks: true,
    },
  });
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await db.project.findUnique({
    where: {
      id: params.id,
    },
    include: {
      tasks: true,
    },
  });
  const { name, tasks } = data;
  return (
    <div className="w-full h-full pr-6 overflow-y-auto">
      <ProjectTaskCard title={name} tasks={tasks} pid={params.id} />
    </div>
  );
}
