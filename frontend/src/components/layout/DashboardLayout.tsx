import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Send, 
  Calendar, 
  Settings, 
  User,
  Sparkles
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Job Matches', path: '/job-matches', icon: <Briefcase size={20} /> },
    { name: 'Applications', path: '/applications', icon: <Send size={20} /> },
    { name: 'Interviews', path: '/interviews', icon: <Calendar size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo & Brand */}
          <div className="px-6 py-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center text-white shrink-0">
              <Sparkles size={20} className="fill-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight tracking-tight">AutoJob AI</h1>
              <p className="text-[11px] font-medium text-gray-500">Premium Explorer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-3 space-y-1 mt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EDF2FE] text-[#2563EB]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Sidebar */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg text-[14px] font-medium transition-colors">
            <Settings size={20} />
            Settings
          </button>
          
          <div className="flex items-center gap-3 px-3 py-3 mt-2 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-[#F3D8C7] flex items-center justify-center shrink-0 overflow-hidden">
               <User size={16} className="text-[#C48C6B]" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[13px] font-bold text-gray-900 truncate">Alex Rivera</p>
              <p className="text-[11px] text-gray-500 truncate">alex@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
