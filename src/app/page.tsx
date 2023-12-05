import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Sticker from "@/components/Sticker";
import { backendSkills } from "@/data/backend-skills";
import { bolsoBom } from "@/data/bolso-bom";
import { contacts } from "@/data/contacts";
import { EXPERIENCE_LIST } from "@/data/experience-list";
import { frontendSkills } from "@/data/frontend-skills";
import { generalSkills } from "@/data/general-skills";
import { musicalShow } from "@/data/musical-show";
import { penhor } from "@/data/penhor";

export default function Home() {
  const PROJECTS = [
    { data: penhor, href: "/projects/penhor" },
    { data: bolsoBom, href: "/projects/bolso-bom" },
    { data: musicalShow, href: "/projects/musical-show" },
  ];
  const EXPERTISES = [
    { name: "frontend_development", skills: frontendSkills },
    { name: "backend_development", skills: backendSkills },
    { name: "general", skills: generalSkills },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <Hero />
        <Projects data={PROJECTS} />
        <Expertise data={EXPERTISES} />
        <About data={EXPERIENCE_LIST} />
        <Contact data={contacts} />
        <Sticker text="open to work" />
      </div>
    </main>
  );
}
