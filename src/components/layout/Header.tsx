
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  const NavLinks = () => (
    <>
      <Link to="/" className="font-medium hover:text-spring-green transition-colors">Home</Link>
      <Link to="/" className="font-medium hover:text-spring-green transition-colors">Advisors</Link>
      <Link to="/" className="font-medium hover:text-spring-green transition-colors">Why Spring Money</Link>
      <Link to="/" className="font-medium hover:text-spring-green transition-colors">Blog</Link>
      <Link to="/" className="font-medium hover:text-spring-green transition-colors">About</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="bg-spring-green rounded-md h-8 w-8 flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-lg hidden md:block">Spring Money</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            <NavLinks />
          </nav>
        )}

        <div className="flex items-center gap-2">
          <Button variant="default">List Your Practice</Button>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Spring Money</SheetTitle>
                </SheetHeader>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                  <nav className="flex flex-col gap-4 px-2">
                    <NavLinks />
                  </nav>
                </ScrollArea>
                <SheetFooter>
                  <Button className="w-full">List Your Practice</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
