
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import AuthForm from "@/components/auth/auth-form";

const Register = () => {
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
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-lyra-teal hover:text-lyra-teal/90">
                Sign in
              </Link>
            </p>
          </div>
          
          <AuthForm mode="register" />
          
          <div className="text-center text-sm text-gray-500">
            <p>
              By signing up, you agree to our{" "}
              <Link to="/terms" className="font-medium text-lyra-teal hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-medium text-lyra-teal hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
