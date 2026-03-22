import { Hero } from "../../components/hero/Hero";
import { BentoGrid } from "../../components/bento/BentoGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      
      <section className="py-20 bg-forest/5 dark:bg-white/5 border-y border-forest/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Boutique Attention. <br />
              <span className="text-accent underline decoration-2 underline-offset-8">Enterprise Precision.</span>
            </h2>
            <p className="text-lg opacity-70 mb-10 leading-relaxed">
              We don&apos;t do cookie-cutter. Every Lunalead project is a handcrafted artifact, 
              blending world-class creative soul with global engineering standards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
