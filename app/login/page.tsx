// server component wrapper
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_#0b122033,_transparent)] p-6">
      <div className="w-full max-w-md glass-panel p-8 rounded-2xl animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">ChartFlow</h2>
          <p className="text-sm text-gray-400 font-medium">Welcome Back</p>
        </div>

        {/* Client login form */}
        <div>
          <LoginForm />
        </div>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-400">Don't have an account? </span>
          <a href="/register" className="text-green-400 font-semibold">
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
}
