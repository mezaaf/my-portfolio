import Image from "next/image";
import { SectionContainer } from "../layouts/SectionContainer";

const AboutSection = () => {
  return (
    <SectionContainer
      id="about"
      padded
      minFullscreen
      className="lg: z-1 flex min-h-screen w-full flex-col gap-4 py-8 sm:gap-6 sm:py-12 lg:gap-8 lg:py-16"
    >
      <h1 className="text-2xl font-bold sm:text-4xl lg:text-6xl">
        About Me<span className="text-sky-400">.</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
          <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            Code, Story, and <span className="text-sky-400">Beyond</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            I began my journey into software development out of pure curiosity,
            driven by a passion to build, learn, and grow. Without a formal
            degree, I taught myself to code — building real-world projects,
            exploring modern web technologies, and learning through practice and
            persistence. I believe that great code is more than just syntax —
            it’s about solving real problems and telling meaningful stories
            through digital experiences. I’m quietly confident, endlessly
            curious, and always moving forward — one project, one line of code
            at a time.
          </p>
          <div className="flex items-center justify-between px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div>
              <h1 className="text-5xl font-bold text-sky-400 sm:text-6xl lg:text-7xl">
                1+
              </h1>
              <p className="text-sm sm:text-base lg:text-lg">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-sky-400 sm:text-6xl lg:text-7xl">
                5+
              </h1>
              <p className="text-sm sm:text-base lg:text-lg">
                PROJECTS COMPLETED
              </p>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-end sm:flex">
          <div className="dark:shadow-accent h-48 w-48 overflow-hidden rounded-xl shadow-xl sm:h-64 sm:w-64">
            <Image
              src="/images/mezaaf.jpg"
              alt="mezaaf"
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
