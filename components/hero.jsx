import Link from "next/link";
import { Button } from "./ui/button";
import CardTrack from "./CardTrack";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-['Kantumruy_Pro]">
            Navigate Your Future, <br />
            Unlock Your Potential
          </h1>
          <p>
            An all-in-one platform to explore career paths, assess skills,
            connect with mentors, and achieve your professtional goals faster
            and smarter.
          </p>
        </div>

        {/* Call-to-action button */}
        <div>
          <Link href="/careerSuggest">
            <Button className="px-8" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Card Track - Full Width */}
      <div className="w-full px-0 mt-16 lg:mt-24">
        <CardTrack />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Text Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 lg:mt-24">
          <div className="text-center">
            <p className="text-body font-poppins leading-relaxed">
              Our personalized assessments and guides help you identify your
              ideal career path based on your skills and aspirations.
            </p>
          </div>

          <div className="text-center">
            <p className="text-body font-poppins leading-relaxed">
              Whether you're a student or looking to switch careers, our AI
              tools analyze your interests, skills, and goals for personalized
              career insights.
            </p>
          </div>

          <div className="text-center">
            <p className="text-body font-poppins leading-relaxed">
              Leverage our coaching services, networking tools, and ability to
              track progress in your career growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
