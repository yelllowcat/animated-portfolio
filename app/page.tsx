import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Studies from "@/components/Studies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-transparent text-white min-h-screen selection:bg-fuchsia-500/30 relative flex flex-col pt-16">
      <Navbar />
      <Hero />
      <Projects />
      <Studies />
      <Footer />
    </main>
  );
}
