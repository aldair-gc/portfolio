import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Sticker from "@/components/Sticker";
import { contacts } from "@/data/contacts";
import { EXPERIENCE_LIST } from "@/data/experience-list";
import { expertises } from "@/data/expertises";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <Hero />
        <Projects data={projects} />
        <Expertise data={expertises} />
        <About data={EXPERIENCE_LIST} />
        <Contact data={contacts} />
        <Sticker text="open to work" />
      </div>
    </main>
  );
}
