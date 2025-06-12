import Image from "next/image";
import { SectionContainer } from "../layouts/SectionContainer";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <SectionContainer
      id="home"
      className="bg-gradient-to-br from-sky-50 via-white to-sky-100 py-8 lg:pt-16 lg:pb-0 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:px-8">
        <div className="flex w-full max-w-3xl flex-col space-y-4 sm:space-y-6 lg:space-y-8 lg:py-24">
          <h1 className="text-center text-lg font-semibold sm:text-xl lg:text-start lg:text-2xl">
            Hey, I&apos;m Marchenda 👋
          </h1>
          <div className="flex flex-col sm:gap-2 lg:gap-3">
            <h1 className="text-center text-3xl font-extrabold sm:text-4xl lg:text-start lg:text-6xl">
              <span className="text-sky-400">Full Stack</span> Web Developer
            </h1>
            <p className="text-center text-base sm:text-lg lg:text-start lg:text-xl">
              I&apos;m a fullstack developer from Madiun, ID, ready to help you
              build complete web solutions — beautiful on the front, powerful
              under the hood.
            </p>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start lg:gap-5">
            <Button className="cursor-pointer bg-sky-400 text-white hover:bg-sky-400/80">
              Get In Touch
            </Button>
            <Button variant={"secondary"} className="cursor-pointer">
              Browse Projects
            </Button>
          </div>
        </div>
        <div className="flex h-full flex-row items-end justify-center lg:justify-end">
          <div className="dark:shadow-accent h-48 w-48 overflow-hidden rounded-full shadow-xl sm:h-64 sm:w-64 lg:h-130 lg:w-130 lg:rounded-none lg:shadow-none">
            <Image
              src="/images/mezaaf.png"
              alt="mezaaf"
              height={1000}
              width={1000}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
