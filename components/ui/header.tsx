import { MenuIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "./button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-background px-5 py-6">
      <Image src="logo.svg" alt="Aparatus" width={91} height={24} />
      <Button>
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
