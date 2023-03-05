import { db } from "@/lib/db";
import { Task } from "@prisma/client";

export default async function handler(req, res) {
  const { projectId } = req.body;
  const tasks: Task[] = await db.task.findMany({
    where: {
      projectId,
    },
  });
  res.status(200).json(tasks);
}
