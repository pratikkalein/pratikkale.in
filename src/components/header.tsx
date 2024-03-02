import { cn, fadeIn } from "@/lib/utils";
import { HeaderNav } from "./header-nav";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <div>
      <header className="mb-4 flex items-center justify-between">
        <HeaderNav />
        <ModeToggle />
      </header>
      <hr className={cn(fadeIn, "dark:border-white border-gray-700 animation-delay-600")} />
    </div>
  );
}

export default Header;
