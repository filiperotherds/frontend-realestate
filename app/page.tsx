import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-7xl h-full flex flex-col items-center justify-start">
        <Header />

        <Hero />
      </div>
    </div>
  );
}
