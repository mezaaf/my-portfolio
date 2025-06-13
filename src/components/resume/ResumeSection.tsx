import { SectionContainer } from "../layouts/SectionContainer";
import Lanyard from "../ui/Lanyard/Lanyard";

const ResumeSection = () => {
  return (
    <SectionContainer
      id="resume"
      minFullscreen
      padded
      className="flex min-h-screen w-full flex-col gap-4 pt-8 sm:gap-6 sm:pt-12 lg:gap-8 lg:pt-16"
    >
      <div className="relative flex flex-col">
        <h1 className="z-1 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
          My Experience
        </h1>
        <div className="absolute -top-5 left-0 sm:-top-6 lg:-top-8">
          <h1 className="text-muted z-0 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            RESUME
          </h1>
        </div>
      </div>
      <div className="relative grid grid-cols-1 flex-row lg:grid-cols-2 lg:gap-12">
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
        </div>
        <div className="hidden lg:-mt-48 lg:flex lg:w-3xl">
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ResumeSection;
