
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type AuthFormProps = {
  mode: "login" | "register";
};

const AuthForm = ({ mode }: AuthFormProps) => {
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("patient");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "login") {
        await signIn(email, password);
      } else {
        await signUp(email, password, userType);
      }
    } catch (error) {
      console.error("Auth error:", error);
      
      // Check if the error is due to email provider being disabled
      if (error.toString().includes("Email") && error.toString().includes("disabled")) {
        toast.error("Email authentication is currently disabled. Please use Google login instead.");
      } else {
        toast.error(mode === "login" ? "Login failed. Please try again." : "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error("Google auth error:", error);
      toast.error("Google sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </h1>
        <p className="text-gray-600 mt-2">
          {mode === "login"
            ? "Sign in to access your account"
            : "Join the Lyra Health platform today"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === "register" && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="lyra-input"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="lyra-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="lyra-input"
          />
        </div>

        {mode === "register" && (
          <div className="space-y-2">
            <Label>I am a:</Label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="patient"
                  name="userType"
                  value="patient"
                  checked={userType === "patient"}
                  onChange={() => setUserType("patient")}
                  className="mr-2"
                />
                <Label htmlFor="patient" className="cursor-pointer">Patient</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="provider"
                  name="userType"
                  value="provider"
                  checked={userType === "provider"}
                  onChange={() => setUserType("provider")}
                  className="mr-2"
                />
                <Label htmlFor="provider" className="cursor-pointer">Provider</Label>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-lyra-teal hover:bg-lyra-teal/90"
          disabled={loading}
        >
          {loading
            ? "Processing..."
            : mode === "login"
            ? "Sign In"
            : "Create Account"}
        </Button>

        <div className="mt-4 text-center">
          {mode === "login" ? (
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-lyra-teal hover:underline font-medium">
                Sign up
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-lyra-teal hover:underline font-medium">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Button 
          variant="outline" 
          type="button" 
          className="w-full"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
