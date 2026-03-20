import DashboardLayout from '../components/layout/DashboardLayout';
import { 
  CalendarCheck, 
  FileCheck, 
  Search, 
  Video,
  ArrowRight,
  Send,
  Sparkles
} from 'lucide-react';

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Header section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-poppins">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, Alex. Your job search is progressing well.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Jobs Matched Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB]">
              <Search size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Jobs matched</p>
            <h3 className="text-4xl font-bold text-gray-900 tracking-tighter font-poppins">128</h3>
          </div>
        </div>

        {/* Applications Sent Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500">
              <FileCheck size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-poppins">+5.2%</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Applications sent</p>
            <h3 className="text-4xl font-bold text-gray-900 tracking-tighter font-poppins">45</h3>
          </div>
        </div>

        {/* Interviews Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
              <CalendarCheck size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-gray-400">Stable</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Interviews scheduled</p>
            <h3 className="text-4xl font-bold text-gray-900 tracking-tighter font-poppins">12</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm mb-8 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
          <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</button>
        </div>
        <div className="divide-y divide-gray-100">
          
          {/* Activity Item 1 */}
          <div className="p-6 flex items-center hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] shrink-0 mr-4">
              <Send size={20} className="ml-0.5" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 font-medium">
                Applied to <span className="font-bold">Senior Product Designer</span> at <span className="font-bold">TechFlow Inc.</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">San Francisco, CA • Remote</p>
            </div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider tabular-nums">
              2 HOURS AGO
            </div>
          </div>

          {/* Activity Item 2 */}
          <div className="p-6 flex items-center hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0 mr-4">
              <CalendarCheck size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 font-medium">
                Interview invitation from <span className="font-bold">Stripe</span> for <span className="font-bold">Lead UX Researcher</span>
              </p>
              <p className="text-xs py-0.5 px-2 bg-gray-100 rounded-md text-gray-600 font-medium inline-block mt-1">Scheduled for Oct 14, 2023</p>
            </div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider tabular-nums">
              5 HOURS AGO
            </div>
          </div>

          {/* Activity Item 3 */}
          <div className="p-6 flex items-center hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 mr-4">
              <Sparkles size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 font-medium">
                New match found: <span className="font-bold">Product Lead</span> at Airbnb
              </p>
              <p className="text-xs text-gray-500 mt-1">98% match with your profile</p>
            </div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider tabular-nums">
              YESTERDAY
            </div>
          </div>

          {/* Activity Item 4 */}
          <div className="p-6 flex items-center hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0 mr-4">
              <FileCheck size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 font-medium">
                Resume version <span className="font-bold">Design_v4.pdf</span> optimized for ATS
              </p>
              <p className="text-xs text-gray-500 mt-1">Score: 92/100</p>
            </div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider tabular-nums">
              OCT 11
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Upcoming Interviews List */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Interviews</h3>
          <div className="space-y-4">
            {/* Interview 1 */}
            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-indigo-600 text-white w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Oct</span>
                <span className="text-xl font-black leading-none">14</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Stripe • Lead UX Researcher</h4>
                <p className="text-xs text-gray-500 font-medium">10:00 AM - 11:00 AM PST</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
                 <Video size={18} />
              </button>
            </div>

            {/* Interview 2 */}
            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-70 hover:opacity-100">
               <div className="bg-gray-200 text-gray-600 w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Oct</span>
                <span className="text-xl font-black leading-none">16</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Figma • Product Designer II</h4>
                <p className="text-xs text-gray-500 font-medium">02:30 PM - 03:30 PM PST</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
                 <Video size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* AI Tip CTA Card */}
        <div className="bg-[#EDF2FE] border border-blue-100 rounded-2xl p-6 flex flex-col justify-between h-full">
           <div>
             <h3 className="text-[#2563EB] font-bold text-lg mb-2">Pro Tip: Optimize your Resume</h3>
             <p className="text-gray-700 text-sm leading-relaxed mb-6">
               We've identified 3 key skills missing from your resume that are frequently appearing in your job matches: <span className="font-bold">Design Systems, Prototyping, and A/B Testing.</span>
             </p>
           </div>
           
           <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center transition-all shadow-sm text-sm">
              Auto-Optimize Resume <ArrowRight size={18} className="ml-2" />
           </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
