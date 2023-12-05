import { bolsoBom } from "./bolso-bom";
import { musicalShow } from "./musical-show";
import { penhor } from "./penhor";

export const projects = [
  {
    data: penhor,
    href: "/projects/penhor",
    image: { src: "/images/penhor-display.png", alt: "Project Penhor screenshot" },
  },
  {
    data: bolsoBom,
    href: "/projects/bolso-bom",
    image: { src: "/images/bolsobom-display.png", alt: "Project Bolso Bom screenshot" },
  },
  {
    data: musicalShow,
    href: "/projects/musical-show",
    image: { src: "/images/musicashow-display.png", alt: "Project Musical Show screenshot" },
  },
];
