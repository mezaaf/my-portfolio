import ScrollVelocity from "../ui/scroll-velocity";

const TextScroll = () => {
  return (
    <div className="relative z-0 -mt-6 flex w-full flex-col items-center justify-center overflow-hidden pb-16 sm:-mt-3 sm:pb-20 lg:-mt-10 lg:pb-24">
      <ScrollVelocity texts={["MARCHENDA EZAFUWANDHANA"]} />
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

export default TextScroll;
