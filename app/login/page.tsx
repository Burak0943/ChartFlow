// server component wrapper
import LoginForm from './components/LoginForm';


export default function LoginPage() {
  return (
    <div className="center-screen">
      <div className="w-full max-w-md card-glass p-8 rounded-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">ChartFlow</h2>
          <p className="text-sm text-gray-400">Sign in to your account</p>
        </div>

        {/* Client login form */}
        <div>
          <LoginForm />
        </div>

        <div className="mt-4 text-center text-sm">
          <a href="/register" className="text-blue-400">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
