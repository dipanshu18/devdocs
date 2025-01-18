export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <div className="min-h-full">
        <div className="relative">
          <aside className="hidden md:block absolute top-0 left-0 min-h-full w-48 border-r pr-5">
            <ul className="space-y-5 mt-5">
              <li>Trending</li>
              <li>Hashtags</li>
              <li>Notifications</li>
              <li>Profile</li>
            </ul>
          </aside>
        </div>
      </div>
      <div className="md:ml-48 flex-1 p-5 overflow-y-auto">{children}</div>
    </div>
  );
}
