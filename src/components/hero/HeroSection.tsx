import Image from "next/image";
import { SectionContainer } from "../layouts/SectionContainer";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <SectionContainer
        id="home"
        padded
        className="z-1 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 sm:py-12 lg:gap-8 lg:py-16"
      >
        <div className="flex w-full max-w-3xl flex-col space-y-4 sm:space-y-6 lg:space-y-8 lg:py-24">
          <h1 className="text-center text-lg font-semibold sm:text-start sm:text-xl lg:text-2xl">
            Hey, I&apos;m Marchenda 👋
          </h1>
          <div className="flex flex-col sm:gap-2 lg:gap-3">
            <h1 className="text-center text-3xl font-extrabold sm:text-start sm:text-4xl lg:text-6xl">
              <span className="text-sky-400">Full Stack</span> Web Developer
            </h1>
            <p className="text-center text-base sm:text-start sm:text-lg lg:text-xl">
              I&apos;m a fullstack developer from Madiun, ID, ready to help you
              build complete web solutions — beautiful on the front, powerful
              under the hood.
            </p>
          </div>
          <div className="flex justify-center gap-3 sm:justify-start lg:gap-5">
            <Link href="#contact">
              <Button className="cursor-pointer bg-sky-400 text-white hover:bg-sky-400/80">
                Get In Touch
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant={"secondary"} className="cursor-pointer">
                Browse Projects
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex h-full flex-row items-center justify-center">
          <div className="overflow-hidden rounded-full border border-sky-400 p-4 shadow-xl sm:p-6 lg:border-2 lg:p-8">
            <div className="h-48 w-48 overflow-hidden rounded-full bg-gradient-to-b from-sky-200 via-15% to-sky-300 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <Image
                src="/images/mezaaf.png"
                alt="mezaaf"
                height={1000}
                width={1000}
                className="mt-4 h-full w-full object-cover object-center grayscale-50 transition-all duration-300 ease-in-out hover:grayscale-0 sm:mt-6 lg:mt-8"
                priority
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default HeroSection;
