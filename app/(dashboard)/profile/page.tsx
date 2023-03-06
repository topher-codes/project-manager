import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { getUserFromCookie } from "@/lib/auth";
import Card from "@/components/Card";
import Image from "next/image";

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
      <Image
        src={user?.image || "/images/profile.png"}
        alt="Profile Image"
        width={100}
        height={100}
        className="rounded-full"
      />
      <span> Name: {user?.firstName}</span>
      <span>Email: {user?.email}</span>
    </Card>
  );
};

export default ProfilePage;
