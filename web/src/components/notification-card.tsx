import { MarkAsRead } from "./mark-as-read";

export function NotificationCard() {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 justify-between p-5 shadow w-full rounded-md">
      <div className="space-y-2">
        <h1>Notification Message</h1>
        <div>Created at</div>
      </div>
      <MarkAsRead />
    </div>
  );
}
