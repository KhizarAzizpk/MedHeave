import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import navbarlogo from "../../assets/images/navbarlogo.png";

const Navbar = () => {
  return (
    <div className="h-[50px] w-[70%] lg:w-[70%] md:w-[85%] sm:w-[90%] w-[94%] mx-auto flex items-center rounded-3xl bg-white justify-between px-4 sm:px-6">

      {/* Logo */}
      <div>
        <img
  src={navbarlogo}
  alt="Logo"
  className="h-20 w-20 object-contain "
/>
      </div>

      {/* Navigation - Desktop */}
      <div className="hidden lg:flex items-center gap-6 text-blue-900 font-semibold">

        <a href="#" className="flex items-center gap-1">
          Services
          <ChevronDown size={16} strokeWidth={2.5} />
        </a>

        <a href="#" className="flex items-center gap-1">
          Specialities
          <ChevronDown size={16} strokeWidth={2.5} />
        </a>

        <a href="#" className="flex items-center gap-1">
          Location
          <ChevronDown size={16} strokeWidth={2.5} />
        </a>

        <a href="#" className="flex items-center gap-1">
          Resources
          <ChevronDown size={16} strokeWidth={2.5} />
        </a>

        <a href="#" className="flex items-center gap-1">
          Company
          <ChevronDown size={16} strokeWidth={2.5} />
        </a>

      </div>

      {/* Contact Button - Desktop */}
      <div className="hidden lg:block">
        <button
  className="
    hidden lg:flex
    bg-red-500 hover:bg-red-600
    rounded-full
    text-white
    px-2 sm:px-3
    py-1.5
    items-center
    gap-1 sm:gap-2
    text-sm sm:text-base
    whitespace-nowrap
  "
>
  Contact Us

  <span className="bg-white rounded-full h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center">
    <ArrowRight
      size={15}
      className="sm:w-[17px] sm:h-[17px] text-black"
      strokeWidth={1.5}
    />
  </span>
</button>
      </div>

      {/* Mobile Menu */}
      <button className="lg:hidden text-blue-900">
        <Menu size={26} />
      </button>

    </div>
  );
};
  
export default Navbar;