
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import AuthForm from "@/components/auth/auth-form";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link to="/" className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link to="/register" className="font-medium text-lyra-teal hover:text-lyra-teal/90">
                create a new account
              </Link>
            </p>
          </div>
          
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
