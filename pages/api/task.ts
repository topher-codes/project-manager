import { db } from "@/lib/db";
import { validateJWT } from "@/lib/auth";

export default async function handler(req, res) {
  const user = await validateJWT(
    req.cookies[process.env.COOKIE_NAME as string]
  );
  await db.task.create({
    data: {
      name: req.body.name,
      projectId: req.body.projectId,
      ownerId: user.id,
      description: req.body.description,
    },
  });
  res.status(200).json({ message: "ok" });
}
