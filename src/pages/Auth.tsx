import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const mode = searchParams.get('mode') || 'login';
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if admin credentials
    if (email === "event@gmail.com" && password === "1234") {
      toast({
        title: "Welcome Admin!",
        description: "You have successfully logged in as administrator.",
      });
      navigate('/');
    } else {
      toast({
        title: mode === 'login' ? "Login Successful!" : "Account Created!",
        description: mode === 'login' ? "Welcome back!" : "Your account has been created successfully.",
      });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy opacity-50"></div>
      
      <div className="w-full max-w-md bg-background border border-border rounded-2xl p-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="hover:bg-secondary"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 bg-input border-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 bg-input border-none"
              />
            </div>
          </div>

          <div className="bg-brown-dark p-4 rounded-xl">
            <div className="text-orange font-semibold mb-2">Admin Login:</div>
            <div className="text-sm space-y-1">
              <div>Email: <span className="text-muted-foreground">event@gmail.com</span></div>
              <div>Password: <span className="text-muted-foreground">1234</span></div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-orange hover:bg-orange-hover text-white font-semibold py-6 rounded-xl"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </Button>

          {mode === 'login' && (
            <div className="text-center">
              <a href="#" className="text-orange text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          )}
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">
            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={() => navigate(`/auth?mode=${mode === 'login' ? 'signup' : 'login'}`)}
            className="text-orange hover:underline font-semibold"
          >
            {mode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
