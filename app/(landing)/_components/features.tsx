import circleText from "@/assets/circle_text.png";

export function Features() {
  return (
    <section id="features" className="w-full h-[720px] p-8 py-16">
      <div className="w-full h-full flex flex-row gap-4">
        <div className="w-3/5 h-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between mb-4 pr-4">
            <h1 className="font-grotesk text-8xl">Recursos</h1>

            <img
              src={circleText.src}
              alt="circle text"
              className="w-20 h-20 animate-spin animation-duration-[10s]"
            />
          </div>

          <div className="w-full h-full bg-neutral-200 rounded-2xl"></div>
        </div>

        <div className="w-2/5 h-full flex flex-col gap-4">
          <div className="w-full h-2/3 bg-neutral-200 rounded-2xl"></div>

          <div className="w-full h-1/3 bg-neutral-200 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
