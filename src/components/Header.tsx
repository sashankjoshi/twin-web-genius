import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-lg">CEC</div>
            <div className="text-xs text-muted-foreground">Events Portal</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-orange"
            onClick={() => navigate('/auth')}
          >
            Login
          </Button>
          <Button 
            className="bg-orange hover:bg-orange-hover text-white rounded-xl"
            onClick={() => navigate('/auth?mode=signup')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
