import Card from "@/components/Card";
import Calendar from "@/components/Calendar";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const dueDates = await db.task.findMany({
    where: {
      ownerId: user?.id,
    },
    select: {
      due: true,
    },
  });
  return { dueDates };
};

const CalendarPage = async () => {
  const dates = await getData();
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Card className="flex flex-col items-center w-full h-full">
        <Calendar />
      </Card>
    </div>
  );
};

export default CalendarPage;
