import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import Projects from "@/components/Projects";
import { backendSkills } from "@/data/backend-skills";
import { bolsoBom } from "@/data/bolso-bom";
import { contacts } from "@/data/contacts";
import { experiences } from "@/data/experiences";
import { frontendSkills } from "@/data/frontend-skills";
import { generalSkills } from "@/data/general-skills";
import { musicalShow } from "@/data/musical-show";
import { penhor } from "@/data/penhor";

export default function Home() {
  const PROJECTS = [penhor, musicalShow, bolsoBom];
  const EXPERTISES = [
    { name: "frontend_development", skills: frontendSkills },
    { name: "backend_development", skills: backendSkills },
    { name: "general", skills: generalSkills },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-primary-800">
      <div className="w-full mx-auto">
        <MenuBar />
        <Hero />
        <Projects data={PROJECTS} />
        <Expertise data={EXPERTISES} />
        <About data={experiences} />
        <Contact data={contacts} />
      </div>
    </main>
  );
}
