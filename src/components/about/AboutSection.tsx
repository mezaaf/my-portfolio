import Image from "next/image";
import { SectionContainer } from "../layouts/SectionContainer";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const skillData = [
  {
    id: 1,
    name: "HTML",
    designation: "",
    image: "/images/skill/html.svg",
  },
  {
    id: 2,
    name: "CSS",
    designation: "",
    image: "/images/skill/css.svg",
  },
  {
    id: 3,
    name: "Javascript",
    designation: "",
    image: "/images/skill/javascript.svg",
  },
  {
    id: 4,
    name: "Typescript",
    designation: "",
    image: "/images/skill/typescript.svg",
  },
  {
    id: 5,
    name: "Tailwind",
    designation: "",
    image: "/images/skill/tailwind.svg",
  },
  {
    id: 6,
    name: "React JS",
    designation: "",
    image: "/images/skill/react.svg",
  },
  {
    id: 7,
    name: "Node JS",
    designation: "",
    image: "/images/skill/nodejs.svg",
  },
  {
    id: 8,
    name: "Next JS",
    designation: "",
    image: "/images/skill/nextjs.svg",
  },
  {
    id: 9,
    name: "MySQL",
    designation: "",
    image: "/images/skill/mysql.svg",
  },
  {
    id: 10,
    name: "Supabase",
    designation: "",
    image: "/images/skill/supabase.svg",
  },
  {
    id: 11,
    name: "PHP",
    designation: "",
    image: "/images/skill/php.svg",
  },
  {
    id: 12,
    name: "Bootstrap",
    designation: "",
    image: "/images/skill/bootstrap.svg",
  },
  {
    id: 13,
    name: "Premiere Pro",
    designation: "",
    image: "/images/skill/premiere.svg",
  },
  {
    id: 14,
    name: "After Effect",
    designation: "",
    image: "/images/skill/aftereffect.svg",
  },
  {
    id: 15,
    name: "Photoshop",
    designation: "",
    image: "/images/skill/photoshop.svg",
  },
  {
    id: 16,
    name: "Coreldraw",
    designation: "",
    image: "/images/skill/corel.svg",
  },
];

const AboutSection = () => {
  return (
    <SectionContainer
      id="about"
      padded
      className="flex w-full flex-col gap-4 pt-8 sm:gap-6 sm:pt-12 lg:gap-8 lg:pt-16"
    >
      <div className="relative flex flex-col">
        <h1 className="z-1 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
          Know Me More
        </h1>
        <div className="absolute -top-5 left-0 sm:-top-6 lg:-top-8">
          <h1 className="text-muted z-0 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            ABOUT
          </h1>
        </div>
      </div>
      <div className="flex flex-row gap-16 sm:gap-20 lg:gap-24">
        <div className="hidden max-h-80 lg:flex">
          <div className="dark:shadow-accent max-h-xs aspect-square overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/mezaaf.jpg"
              alt="mezaaf"
              width={1000}
              height={1000}
              className="aspect-square object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3">
          <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
            Code, Story, <span className="text-sky-400">and the After</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            {`Hello, I'm Marchenda Ezafuwandhana, i'm living in Madiun, ID. I've more than 1 year of experience as a Full Stack Web Developer. I'm skilled in creating, developing, and managing websites, with a bias towards React JS and Next JS.`}
          </p>
          <h1 className="font-semibold text-sky-400 sm:text-lg lg:text-xl">
            What I love to do
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            {`I love bringing ideas to life through clean, functional, and user-friendly web interfaces. As a self-taught developer, I enjoy learning new tools and frameworks, and I'm always curious about how things work behind the scenes — from backend logic to frontend animations.`}
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            {`What drives me is the joy of solving real-world problems through code. I'm excited to grow in this industry, connect with fellow developers, and contribute to meaningful digital products.`}
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
            <h1 className="text-center font-semibold text-sky-400 sm:text-lg lg:text-xl">
              My Skill
            </h1>
            <div className="-ml-4 flex w-full flex-row items-center justify-center self-center lg:mb-10">
              <AnimatedTooltip items={skillData} />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
