import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { getUserFromCookie } from "@/lib/auth";
import Card from "@/components/Card";

const getData = async () => {
  const cookie = await getUserFromCookie(cookies());
  const user = await db.user.findUnique({
    where: {
      id: cookie?.id,
    },
  });
  return { user };
};

const ProfilePage = async () => {
  const { user } = await getData();

  return (
    <Card className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl font-bold">Profile</h1>
      <ul className="flex flex-col items-start w-full mt-4">
        <li className="flex flex-row items-center w-full">
          <span className="w-1/3">Name: {user?.firstName}</span>
          <span className="w-1/3">Email: {user?.email}</span>
        </li>
      </ul>
    </Card>
  );
};

export default ProfilePage;
