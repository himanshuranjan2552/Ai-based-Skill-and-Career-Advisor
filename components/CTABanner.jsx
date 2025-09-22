import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="bg-cta-banner py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white font-poppins mb-2">
          It is never too late to be what you might have been.
        </h2>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cta-highlight font-poppins mb-8">
          Start Your Journey Now!
        </p>
        <Button className="bg-cta-btn hover:bg-cta-btn-hover text-white px-8 py-4 text-lg font-poppins font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
          SIGN UP FOR FREE
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
