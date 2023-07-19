import Card from "../../components/card";
import { PROJECTS } from "../../data/projects";
import { SEO } from "../../data/seo";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const metadata = {
  title: `项目 - ${SEO.title}`,
  description: SEO.description,
  keywords: SEO.fillKeywords(),
  openGraph: {
    title: `项目 - ${SEO.title}`,
    description: SEO.description,
    images: "/twitter-image.png",
  },
  twitter: {
    title: `项目 - ${SEO.title}`,
    description: SEO.description,
    site: "@noobnooc",
    card: "summary_large_image",
    images: "/twitter-image.png",
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-4 py-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {PROJECTS.map((project) => (
          <Card
            key={project.name}
            className={twMerge(
              "flex flex-col gap-4 sm:flex-row",
              `bg-${project.color}-300/10 dark:bg-${project.color}-400/10`
            )}
            link={project.link}
          >
            {project.image ? (
              <Image
                className="h-14 w-14 rounded-lg"
                src={project.image}
                alt={`${project.name}的图标`}
              />
            ) : (
              <div
                className={twMerge(
                  "flex h-14 w-14 items-center justify-center rounded-lg font-serif text-4xl font-bold",
                  `bg-${project.color}-500`
                )}
              >
                {project.name[0]}
              </div>
            )}
            <div>
              <h1 className={`text-${project.color}-500 text-bold sm:text-lg`}>
                {project.name}
              </h1>
              <p className="opacity-60">{project.summary}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
