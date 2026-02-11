import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Heart,
  Search,
  Share,
  Sparkles,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "../../../components/ui/avatar";
import backgroundImage from "@/assets/background_0.png";
import apartmentImage from "@/assets/apartment.png";

export function Hero() {
  return (
    <section className="w-full p-8 py-16">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="flex flex-row items-center justify-center gap-4">
          <AvatarGroup className="grayscale">
            <Avatar>
              <AvatarImage
                src="https://framerusercontent.com/images/W25OSdXNijQzs6HFOy5Tnx7SI.jpg?width=100&height=100"
                alt=""
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://framerusercontent.com/images/XkZDFV2RkODhiEIHZaZGoYIBdY.jpg?width=100&height=100"
                alt=""
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://framerusercontent.com/images/rOuv1z818S3i8SIQTmjJqH3ghKE.jpg?width=100&height=100"
                alt=""
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </AvatarGroup>

          <span className="font-grotesk text-muted-foreground">
            Escolhido por +600 corretores
          </span>
        </div>

        <h1 className="font-grotesk text-7xl font-light max-w-4xl text-center leading-[72px]">
          Definimos a{" "}
          <span className="font-normal">
            base<span className="animate-cursor inline-block">_</span>
          </span>{" "}
          tecnológica do mercado imobiliário
        </h1>
        <p className="text-muted-foreground text-lg max-w-[720px] text-center font-grotesk">
          Website personalizado, CRM especializado e Inteligência Artificial
          aplicada aos indicadores do mercado - Ambiente profissional completo
          para corretores e imobiliárias.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/sign-up">
            <button className="h-12 pl-6 pr-2 flex items-center justify-center gap-6 bg-primary text-white text-sm rounded-full hover:bg-primary/80 transition-colors cursor-pointer">
              Comece Grátis
              <div className="size-8 rounded-full bg-white text-primary flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
            </button>
          </Link>

          <span className="text-xs text-muted-foreground flex flex-row items-center gap-2">
            <CreditCard size={14} />
            Não solicitamos cartão de crédito*
          </span>
        </div>

        <div
          className="w-full mt-12 rounded-t-4xl bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
          <div className="w-full h-full flex items-center justify-center p-20 pb-0 bg-linear-to-b from-transparent via-background/50 to-background pointer-events-none">
            <div className="relative w-full aspect-video rounded-lg bg-white/85 backdrop-blur-sm overflow-hidden">
              <div className="w-full h-16 flex flex-row items-center justify-between px-8 border-b border-border">
                <div className="flex flex-row items-center justify-between gap-6">
                  <h1 className="font-grotesk text-sm font-extrabold">
                    Sua Logo
                  </h1>

                  <div className="w-72 h-7 flex flex-row items-center gap-2 px-2 rounded-md border border-border text-muted-foreground">
                    <Search size={14} />
                    <span className="text-xs">Pesquisar Imóveis...</span>
                  </div>
                </div>

                <div className="px-3 h-7 flex flex-row items-center justify-center gap-2 bg-[#E1FF69] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="14"
                    height="14"
                    fill="#171717"
                  >
                    <path
                      fillRule="evenodd"
                      d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352"
                    />
                  </svg>

                  <span className="text-[11px] text-primary">
                    Entre em Contato
                  </span>
                </div>
              </div>

              <div className="w-full p-8 flex flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div
                    className="relative w-56 h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${apartmentImage.src})` }}
                  >
                    <div className="absolute top-0 left-0 p-2 w-full flex flex-row items-center justify-between">
                      <div className="px-2 py-0.5 rounded-sm bg-white text-[10px] text-primary">
                        Aluguel
                      </div>

                      <Share
                        size={16}
                        strokeWidth={2.5}
                        className="text-white mx-2"
                      />
                    </div>

                    <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between pt-2">
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-[11px] font-bold text-primary">
                        R$8.500
                      </h2>

                      <span className="text-[10px] text-muted-foreground/80">
                        R$10.250 total
                      </span>
                    </div>

                    <span className="text-[10px] text-primary">#2074</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground/80">
                    Apartamento, Alphaville
                  </span>

                  <span className="text-[10px] text-muted-foreground/80">
                    95m² • 2 banheiros • 3 quartos • 2 garagens
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div
                    className="relative w-56 h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${apartmentImage.src})` }}
                  >
                    <div className="absolute top-0 left-0 p-2 w-full flex flex-row items-center justify-between">
                      <div className="px-2 py-0.5 rounded-sm bg-white text-[10px] text-primary">
                        Aluguel
                      </div>

                      <Share
                        size={16}
                        strokeWidth={2.5}
                        className="text-white mx-2"
                      />
                    </div>

                    <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between pt-2">
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-[11px] font-bold text-primary">
                        R$8.500
                      </h2>

                      <span className="text-[10px] text-muted-foreground/80">
                        R$10.250 total
                      </span>
                    </div>

                    <span className="text-[10px] text-primary">#2074</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground/80">
                    Apartamento, Alphaville
                  </span>

                  <span className="text-[10px] text-muted-foreground/80">
                    95m² • 2 banheiros • 3 quartos • 2 garagens
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div
                    className="relative w-56 h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${apartmentImage.src})` }}
                  >
                    <div className="absolute top-0 left-0 p-2 w-full flex flex-row items-center justify-between">
                      <div className="px-2 py-0.5 rounded-sm bg-white text-[10px] text-primary">
                        Aluguel
                      </div>

                      <Share
                        size={16}
                        strokeWidth={2.5}
                        className="text-white mx-2"
                      />
                    </div>

                    <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between pt-2">
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-[11px] font-bold text-primary">
                        R$8.500
                      </h2>

                      <span className="text-[10px] text-muted-foreground/80">
                        R$10.250 total
                      </span>
                    </div>

                    <span className="text-[10px] text-primary">#2074</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground/80">
                    Apartamento, Alphaville
                  </span>

                  <span className="text-[10px] text-muted-foreground/80">
                    95m² • 2 banheiros • 3 quartos • 2 garagens
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div
                    className="relative w-56 h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${apartmentImage.src})` }}
                  >
                    <div className="absolute top-0 left-0 p-2 w-full flex flex-row items-center justify-between">
                      <div className="px-2 py-0.5 rounded-sm bg-white text-[10px] text-primary">
                        Aluguel
                      </div>

                      <Share
                        size={16}
                        strokeWidth={2.5}
                        className="text-white mx-2"
                      />
                    </div>

                    <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between pt-2">
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-[11px] font-bold text-primary">
                        R$8.500
                      </h2>

                      <span className="text-[10px] text-muted-foreground/80">
                        R$10.250 total
                      </span>
                    </div>

                    <span className="text-[10px] text-primary">#2074</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground/80">
                    Apartamento, Alphaville
                  </span>

                  <span className="text-[10px] text-muted-foreground/80">
                    95m² • 2 banheiros • 3 quartos • 2 garagens
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div
                    className="relative w-56 h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${apartmentImage.src})` }}
                  >
                    <div className="absolute top-0 left-0 p-2 w-full flex flex-row items-center justify-between">
                      <div className="px-2 py-0.5 rounded-sm bg-white text-[10px] text-primary">
                        Aluguel
                      </div>

                      <Share
                        size={16}
                        strokeWidth={2.5}
                        className="text-white mx-2"
                      />
                    </div>

                    <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between pt-2">
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-[11px] font-bold text-primary">
                        R$8.500
                      </h2>

                      <span className="text-[10px] text-muted-foreground/80">
                        R$10.250 total
                      </span>
                    </div>

                    <span className="text-[10px] text-primary">#2074</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground/80">
                    Apartamento, Alphaville
                  </span>

                  <span className="text-[10px] text-muted-foreground/80">
                    95m² • 2 banheiros • 3 quartos • 2 garagens
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div
                    className="relative w-56 h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${apartmentImage.src})` }}
                  >
                    <div className="absolute top-0 left-0 p-2 w-full flex flex-row items-center justify-between">
                      <div className="px-2 py-0.5 rounded-sm bg-white text-[10px] text-primary">
                        Aluguel
                      </div>

                      <Share
                        size={16}
                        strokeWidth={2.5}
                        className="text-white mx-2"
                      />
                    </div>

                    <div className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                      <div className="size-2 rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between pt-2">
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-[11px] font-bold text-primary">
                        R$8.500
                      </h2>

                      <span className="text-[10px] text-muted-foreground/80">
                        R$10.250 total
                      </span>
                    </div>

                    <span className="text-[10px] text-primary">#2074</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground/80">
                    Apartamento, Alphaville
                  </span>

                  <span className="text-[10px] text-muted-foreground/80">
                    95m² • 2 banheiros • 3 quartos • 2 garagens
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
