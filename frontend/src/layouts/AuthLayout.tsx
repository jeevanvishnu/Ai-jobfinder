
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const AuthLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#EEF2F6]">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-20 flex w-full items-center justify-between bg-white/95 px-4 py-4 backdrop-blur-sm sm:px-8 sm:py-6">
        <div className="flex items-center gap-2.5 shadow-sm bg-white/50 backdrop-blur-sm pr-4 pl-1.5 py-1.5 rounded-xl border border-white/50">
          <div className="bg-[#2563EB] p-1.5 rounded-lg flex items-center justify-center shadow-md">
            <Sparkles className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">AI-JobFinder</span>
        </div>
        <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
          Help Center
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex w-full flex-grow items-center justify-center px-4 pb-12 pt-28 sm:pt-32">
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] w-full max-w-[440px] overflow-hidden border border-gray-100">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <Link
              to="/login"
              className={`flex-1 text-center py-4 text-[14px] font-bold transition-all relative ${
                isLogin ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Login
              {isLogin && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] rounded-t-full"></div>
              )}
            </Link>
            <Link
              to="/signup"
              className={`flex-1 text-center py-4 text-[14px] font-bold transition-all relative ${
                !isLogin ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Sign up
              {!isLogin && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] rounded-t-full"></div>
              )}
            </Link>
          </div>

          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-center pb-8 gap-8 text-[12px] text-gray-400 font-medium relative z-10">
        <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-gray-700 transition-colors">Contact Support</a>
      </footer>
    </div>
  );
};

export default AuthLayout;
