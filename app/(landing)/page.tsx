import { Header } from "@/app/(landing)/_components/header";
import { Hero } from "@/app/(landing)/_components/hero";
import { Features } from "@/app/(landing)/_components/features";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-7xl px-8 h-full flex flex-col items-center justify-start">
        <Header />

        <Hero />

        <Features />
      </div>
    </div>
  );
}
