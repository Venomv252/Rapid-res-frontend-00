import { FiHome, FiMap, FiActivity, FiUsers, FiFileText, FiSettings, FiLogOut } from "react-icons/fi";

export default function DashboardTemplate() {
  return (
    <div className="flex bg-[#0B1221] min-h-screen text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0D1628] p-6 flex flex-col  border-r border-gray-700/40">
      <div className ="flex mb-8 gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116A31.365 31.365 0 008.84 7.5a2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467z" clipRule="evenodd" />
        </svg>
        </span>
        <span className="text-xl font-bold tracking-wide">RapidResq</span>
        </div>

        <nav className="space-y-2 flex-1 ">
          <SidebarItem icon={<FiHome />} label="Dashboard" active />
          <SidebarItem icon={<FiMap />} label="Live Map" />
          <SidebarItem icon={<FiActivity />} label="Incidents" />
          <SidebarItem icon={<FiUsers />} label="Responders" />
          <SidebarItem icon={<FiFileText />} label="Reports" />
        </nav>

        <div className="pt-6 border-t border-gray-700/40">
          <SidebarItem icon={<FiSettings />} label="Settings" />
          <SidebarItem icon={<FiLogOut />} label="Logout" />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">
            + New Report
          </button>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-wrap gap-4 bg-[#111827] border border-gray-700 p-4 rounded-xl mb-8">
          <Filter label="Date" value="Last 30 Days" />
          <Filter label="Region" value="All" />
          <Filter label="Incident Type" value="All" />
        </div>

        {/* STATS (Empty Cards) */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <EmptyCard />
          <EmptyCard />
          <EmptyCard />
          <EmptyCard />
        </div>

        {/* CHART & CATEGORY (Empty Boxes) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <EmptyBox title="Incidents Over Time (Chart Placeholder)" />
          <EmptyBox title="Incident Categories (Pie Chart Placeholder)" />
        </div>

        {/* TABLE (Empty) */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Recent Incidents</h3>
          <p className="text-gray-400 text-sm">Table placeholder</p>
          <div className="mt-4 h-40 bg-[#0D1628] rounded-lg border border-gray-700/40"></div>
        </div>

      </main>
    </div>
  );
}

/* ----------------------- COMPONENTS ----------------------- */

function SidebarItem({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
      ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700/30"}
    `}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Filter({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-400 text-xs">{label}</span>
      <button className="bg-[#0D1628] border border-gray-700 px-3 py-2 rounded-lg text-sm">
        {value} ▼
      </button>
    </div>
  );
}

function EmptyCard() {
  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-700 h-28 flex items-center justify-center text-gray-500 text-sm">
      Empty Card
    </div>
  );
}

function EmptyBox({ title }) {
  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-700 h-64 flex flex-col justify-center items-center text-gray-500">
      {title}
    </div>
  );
}
