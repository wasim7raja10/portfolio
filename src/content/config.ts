import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date(),
      updateDate: z.date().optional(),
      cover: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.array(z.string()).optional(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      skills: z.array(z.string()).optional(),
      liveUrl: z.string().optional(),
      githubUrl: z.string().optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
    }),
});

const experiencesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: z.string(),
      description: z.array(z.string()).optional(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
      skills: z.array(z.string()).optional(),
    }),
});

export const collections = {
  blogs: blogsCollection,
  projects: projectsCollection,
  experiences: experiencesCollection,
};
