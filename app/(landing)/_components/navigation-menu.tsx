"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuList
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-8 font-normal">
        <NavigationMenuItem>
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            Recursos
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="#plans"
            className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            Planos
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="#team"
            className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            Nossa Equipe
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            Contato
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
