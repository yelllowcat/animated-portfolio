import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Studies from "@/components/Studies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-neutral-950 min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <Projects />
      <Studies />
      <Footer />
    </main>
  );
}
