import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, BookOpen, Home, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/section-a", label: "Section A", icon: BookOpen },
    { path: "/section-b", label: "Section B", icon: BookOpen },
    { path: "/section-c", label: "Section C", icon: BookOpen },
    { path: "/holidays", label: "Holidays", icon: Calendar },
  ];

  const getSectionStyle = (path: string) => {
    switch (path) {
      case "/section-a":
        return "bg-section-a text-section-a-foreground hover:bg-section-a/90";
      case "/section-b":
        return "bg-section-b text-section-b-foreground hover:bg-section-b/90";
      case "/section-c":
        return "bg-section-c text-section-c-foreground hover:bg-section-c/90";
      case "/holidays":
        return "bg-holiday text-holiday-foreground hover:bg-holiday/90";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    }
  };

  return (
    <nav className="bg-card border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-academic p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground hidden sm:block">
                College Schedule Manager
              </span>
              <span className="text-lg font-bold text-foreground sm:hidden">
                Schedule
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm",
                    isActive
                      ? getSectionStyle(path)
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, label, icon: Icon }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300",
                      isActive
                        ? getSectionStyle(path)
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;