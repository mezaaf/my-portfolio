import { Circle } from "lucide-react";
import { SectionContainer } from "../layouts/SectionContainer";

const ResumeSection = () => {
  return (
    <SectionContainer
      id="resume"
      padded
      className="flex w-full flex-col gap-4 pt-8 sm:gap-6 sm:pt-12 lg:gap-8 lg:pt-16"
    >
      <div className="relative grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="relative flex">
            <h1 className="z-3 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
              My Experience
            </h1>
            <div className="absolute -top-5 left-0 z-0 sm:-top-6 lg:-top-8">
              <h1 className="text-muted z-0 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
                RESUME
              </h1>
            </div>
          </div>
          <ul>
            {experienceData.map((data) => (
              <li
                key={data.id}
                className="relative flex items-baseline gap-6 pb-8"
              >
                <div className="before:absolute before:top-1 before:left-2 before:h-full before:w-1 before:bg-sky-400">
                  <Circle
                    fill="oklch(74.6% 0.16 232.661)"
                    stroke="transparent"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-md mb-4 font-bold sm:text-xl">
                    {data.place} ({data.time})
                  </p>
                  <p className="text-xl font-semibold text-sky-400">
                    {data.role}
                  </p>
                  <ul className="sm:text-md ms-5 list-disc text-sm lg:text-lg">
                    {data.projects.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="relative flex">
            <h1 className="z-3 text-2xl font-bold text-sky-400 sm:text-3xl lg:text-4xl">
              My Education
            </h1>
          </div>
          <ul>
            {educationData.map((data) => (
              <li
                key={data.id}
                className="relative flex items-baseline gap-6 pb-8"
              >
                <div className="before:absolute before:top-1 before:left-2 before:h-full before:w-1 before:bg-sky-400">
                  <Circle
                    fill="oklch(74.6% 0.16 232.661)"
                    stroke="transparent"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-md mb-4 font-bold sm:text-xl">
                    {data.time}
                  </p>
                  <p className="text-xl font-semibold text-sky-400">
                    {data.title}
                  </p>
                  <p className="sm:text-md text-sm lg:text-lg">
                    {data.name} - {data.place}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ResumeSection;

const experienceData = [
  {
    id: 1,
    place: "Tarbiyatul Mutathowi'in Islamic Boarding School",
    role: "Full Stack Web Developer",
    projects: [
      {
        id: 1.1,
        title: "Official Website Platform",
      },
      {
        id: 1.2,
        title: "Student Registration Platform",
      },
    ],
    time: "Feb 2024 - Present",
  },
  {
    id: 2,
    place:
      "Tarmu Media - Official Publication Platform of Tarbiyatul Mutathowi'in Islamic Boarding School",
    role: "Team Leader",
    projects: [
      {
        id: 2.1,
        title: "Digital Content Strategy",
      },
      {
        id: 2.2,
        title: "Social Media & Event Documentation",
      },
      {
        id: 2.3,
        title: "Multimedia Asset Production",
      },
    ],
    time: "Feb 2024 - Present",
  },
];

const educationData = [
  {
    id: 1,
    title: "Islamic Boarding School",
    name: "Tarbiyatul Mutathowi'in Islamic Boarding School",
    place: "Madiun, ID",
    time: "2016 - 2024",
  },
  {
    id: 2,
    title: "Senior High School (Science Major)",
    name: "MAN 2 Madiun",
    place: "Madiun, ID",
    time: "2019 - 2022",
  },
  {
    id: 3,
    title: "Frontend Web Development (Bootcamp)",
    name: "Harisenin.com Bootcamp",
    place: "ID",
    time: "2025",
  },
];
