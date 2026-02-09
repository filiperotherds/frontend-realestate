import Link from "next/link";
import { NavMenu } from "./navigation-menu";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function Header() {
  return (
    <header className="w-full h-16 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-extrabold text-lg">Base Imob</h1>

        <NavMenu />
      </div>

      <div className="flex flex-row items-center gap-4">
        <Link href="/login">
          <Button variant={"ghost"} size={"sm"}>
            Entrar
          </Button>
        </Link>

        <Link href="/signup">
          <Button variant={"default"} size={"sm"}>
            Começar Agora
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </header>
  );
}
