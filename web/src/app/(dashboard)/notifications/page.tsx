import { NotificationCard } from "@/components/notification-card";

export default function Notifications() {
  return (
    <div>
      <h1 className="text-xl font-bold">Notifications</h1>

      <div className="my-5 grid grid-cols-1 gap-5">
        <NotificationCard />
      </div>
    </div>
  );
}
