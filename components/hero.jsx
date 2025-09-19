import Link from "next/link";
import { Button } from "./ui/button";

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

        <div className="bg-stone-200">
            <div>
                {/* carousel code yahan pr add krna hai */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
