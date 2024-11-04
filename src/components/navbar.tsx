import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import Button from shadcn
import { Menu } from "lucide-react"; // Icon for responsive menu

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
            NewsFlash
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            News
          </Link>
          <Link href="/flipnews" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            FlipFlop
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Subscribe</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-gray-700">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
