import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight, CreditCard } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full p-8 pt-16">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <h1 className="text-6xl font-extrabold max-w-4xl text-center leading-[72px]">
          Definimos a base tecnológica do mercado imobiliário
        </h1>
        <p className="text-muted-foreground text-lg max-w-[720px] text-center">
          O ambiente profissional completo para corretores e imobiliárias -
          Website personalizado, CRM profissional e inteligência artificial.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/signup">
            <Button variant={"default"} size={"lg"}>
              Comece Grátis
              <ChevronRight />
            </Button>
          </Link>

          <span className="text-xs text-muted-foreground flex flex-row items-center gap-2">
            <CreditCard size={14} />
            Não solicitamos cartão de crédito*
          </span>
        </div>
      </div>
    </section>
  );
}
