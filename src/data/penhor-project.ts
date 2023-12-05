export const penhorProject = [
  {
    name: "name",
    value: "Penhor",
  },
  {
    name: "date",
    value: "2022",
  },
  {
    name: "description",
    value:
      "Project of a system for pawn evaluators, currently encompassing three sectors of pawn: gemology, watchmaking, and high-value pens. The gemology section includes tools for calculating the qualities and characteristics of gems. The watchmaking and pens sections allow users to update databases with details and images of each item.",
  },
  {
    name: "details",
    value:
      "The system, developed with Typescript using Next.js and supported by Postgres database managed with Prisma, integrates JWT authentication for access control, TanStack Query (React Query) to manage cache and request of data and TanStack Table (React Table) to easy and fast implementation of the tables for the user. Additionally, it maintains a content change log for audit purposes. And it is fully operational and responsive, ensuring seamless operation on the small screens of mobile devices.",
  },
  {
    name: "images",
    images: [
      {
        src: "/images/penhor-desktop.png",
        alt: "Screenshot of project Penhor",
        width: 1280,
        height: 1017,
      },
      {
        src: "/images/penhor-mobile.jpeg",
        alt: "Screenshot of project Penhor",
        width: 393,
        height: 852,
      },
      {
        src: "/images/penhor-mobile2.jpeg",
        alt: "Screenshot of project Penhor",
        width: 393,
        height: 852,
      },
    ],
  },
];
