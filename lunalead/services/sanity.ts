import { client } from "@/lib/sanity";

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  caseStudyLink?: string;
}

export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  mainImage,
  category,
  problem,
  solution,
  technologies,
  caseStudyLink
}`;

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(PROJECTS_QUERY);
}
