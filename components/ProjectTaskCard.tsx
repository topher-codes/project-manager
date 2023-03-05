import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS } from "@prisma/client";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import { Task } from "@prisma/client";
import NewTask from "./NewTask";
import { Prisma } from "@prisma/client";
import { getTasks } from "@/lib/api";

interface TaskCardProps {
  title: string;
  tasks?: Task[];
  pid?: string;
}

const ProjectTaskCard = async ({ title, tasks, pid }: TaskCardProps) => {
  const data = tasks;
  return (
    <Card className="">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <NewTask />
      </div>
      <div>
        {data && data.length ? (
          <div>
            {data.map((task) => (
              <div className="flex items-center justify-between">
                <div className="py-2 ">
                  <div>
                    <span className="text-gray-800">{task.name}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">
                      {task.description}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  Progress: {task.status}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no tasks</div>
        )}
      </div>
    </Card>
  );
};

export default ProjectTaskCard;
