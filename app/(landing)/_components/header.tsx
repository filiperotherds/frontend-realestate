import Link from "next/link";
import { NavMenu } from "./navigation-menu";
import { Button } from "../../../components/ui/button";
import { ChevronRight } from "lucide-react";
import { BaseLogo } from "@/components/icons/base-logo";

export function Header() {
  return (
    <header className="w-full h-16 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-16">
        <Link href="/">
          <BaseLogo className="h-6 w-auto text-foreground hover:text-[#E1FF69] transition-colors" />
        </Link>

        <NavMenu />
      </div>

      <div className="flex flex-row items-center gap-4">
        <Link href="/sign-in">
          <Button variant={"link"} size={"default"} className="cursor-pointer">
            Entrar
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button
            variant={"default"}
            size={"default"}
            className="font-normal text-primary rounded-full bg-[#E7F99A] hover:bg-[#E1FF69] transition-colors cursor-pointer"
          >
            Comece Agora
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </header>
  );
}
