import { useState } from "react";
import Overview from "./../components/Overview";
import Profile from "./../components/Profile";
import Settings from "./../components/Settings";

const VendorLayout = () => {
  const [state, setState] = useState("dashboard");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  console.log(user);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-4">
        <nav className="space-y-4">
          <button onClick={() => setState("overview")} className="block">
            Overview
          </button>
          <button onClick={() => setState("profile")} className="block">
            Profile
          </button>
          <button onClick={() => setState("apply")} className="block">
            Apply For Vendor
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        {state === "overview" && <Overview />}
        {state === "profile" && <Profile user={user} />}
        {state === "apply" && <Settings />}
      </main>
    </div>
  );
};

export default VendorLayout;
