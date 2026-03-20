import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, LoaderCircle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearAuthError, loginUser, startGoogleAuth } from '../features/AuthSlice.ts';
import type { AppDispatch, RootState } from '../app/Store.ts';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      dispatch(clearAuthError());
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error('Please fill all fields.');
      return;
    }

    try {
      await dispatch(loginUser(form)).unwrap();
      toast.success('Login successful');
    } catch (submitError) {
      const message =
        typeof submitError === 'string' ? submitError : 'Unable to sign in. Please try again.';
      toast.error(message);
    }
  };

  const handleGoogleLogin = () => {
    startGoogleAuth();
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight font-inter">Welcome Back</h2>
      <p className="text-gray-500 text-[14px] mb-6">
        Enter your details to access your AutoJob AI account
      </p>

      {error && (
        <div
          role="alert"
          className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Mail className="h-[18px] w-[18px] text-gray-400" strokeWidth={2} />
            </div>
            <input
              type="email"
              name="email"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-[3px] focus:ring-blue-100 focus:border-blue-500 text-[14px] transition-all outline-none placeholder:text-gray-400/80 disabled:bg-gray-50 disabled:text-gray-400"
              placeholder="name@company.com"
              value={form.email}
              onChange={handleFormChange}
              disabled={loading}
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-[13px] font-bold text-gray-700">
              Password
            </label>
            <a href="#" className="text-[12px] font-bold text-[#2563EB] hover:text-blue-700">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className="h-[18px] w-[18px] text-gray-400" strokeWidth={2} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:ring-[3px] focus:ring-blue-100 focus:border-blue-500 text-[14px] transition-all outline-none placeholder:text-gray-400/80 tracking-widest disabled:bg-gray-50 disabled:text-gray-400"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleFormChange}
              disabled={loading}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors disabled:cursor-not-allowed disabled:text-gray-300"
              disabled={loading}
            >
              {showPassword ? (
                <EyeOff className="h-[18px] w-[18px]" strokeWidth={2} />
              ) : (
                <Eye className="h-[18px] w-[18px]" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-2.5 rounded-lg flex items-center justify-center transition-all mt-5 text-[14px] ${
            loading
              ? 'bg-blue-400 cursor-not-allowed shadow-none'
              : 'bg-[#2563EB] hover:bg-blue-700 shadow-[0_2px_10px_rgba(37,99,235,0.2)]'
          }`}
        >
          {loading ? (
            <>
              <LoaderCircle className="mr-2 h-[18px] w-[18px] animate-spin" strokeWidth={2} />
              Login In...
            </>
          ) : (
            <>
              Login <ArrowRight className="ml-1.5 h-[18px] w-[18px]" strokeWidth={2} />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 flex items-center">
        <div className="flex-grow border-t border-gray-100"></div>
        <span className="px-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase">OR CONTINUE WITH</span>
        <div className="flex-grow border-t border-gray-100"></div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3">
        <button onClick={handleGoogleLogin} disabled={loading} type="button" className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-[13px] font-bold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm h-10">
          <svg className="h-[18px] w-[18px] mr-2" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
      </div>
    </>
  );
};

export default Login;
