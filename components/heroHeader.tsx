import React from "react";

type HeroHeaderProps = {
  title: string;
  backgroundImage: { src: string };
};

const HeroHeader: React.FC<HeroHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <header
      className="relative isolate overflow-hidden bg-gray-900 max-w-7xl mx-auto xl:rounded-2xl shadow-xl"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div className="aspect-[3/1] bg-gradient-to-t from-yellow-800 to-black opacity-60" />
      </div>
      <div className="flex h-[20rem] items-end justify-center pb-8">
        <div className="max-w-full flex-shrink-0 lg:mx-0 lg:max-w-3xl">
          <h1 className="text-center text-5xl font-bold tracking-loose text-white sm:text-6xl text-shadow-lg/40">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
