import { Calendar } from "lucide-react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">CEC</div>
                <div className="text-sm text-muted-foreground">Department Events Portal</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting students with opportunities, fostering community, and building the future through engaging events.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-orange transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#events" className="hover:text-orange transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-orange transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-orange transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Departments</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange transition-colors">Computer Science</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Mechanical</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Biotechnology</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2025 CGC Events. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
