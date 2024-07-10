
// @ts-ignore
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets/",
      publicFolder: "",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blogs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "A short description of the post",
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date Posted",
            required: true,
          },
          {
            type: "datetime",
            name: "updateDate",
            label: "Date Updated",
            description: "The date the post was last updated",
          },
          {
            type: "object",
            name: "cover",
            label: "Cover Image",
            description: "The image used as the cover for the post",
            fields: [
              {
                type: "image",
                name: "url",
                label: "URL",
                description: "The URL of the image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                description: "The alt text of the image",
              },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            description: "Tags for the post",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "src/content/projects",
        format: "json",
        fields: [
          {
            label: "Name",
            name: "name",
            type: "string",
          },
          {
            type: "object",
            name: "image",
            label: "Image",
            description: "The image used as the cover for the post",
            fields: [
              {
                type: "image",
                name: "url",
                label: "URL",
                description: "The URL of the image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                description: "The alt text of the image",
              },
            ],
          },
          {
            label: "Start Date",
            name: "startDate",
            type: "datetime",
          },
          {
            label: "End Date",
            name: "endDate",
            type: "datetime",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
            list: true,
          },
          {
            label: "Skills",
            name: "skills",
            type: "string",
            list: true,
          },
          {
            label: "Live Url",
            name: "liveUrl",
            type: "string",
          },
          {
            label: "Github Url",
            name: "githubUrl",
            type: "string",
          },
        ],
      },
      {
        label: "Experiences",
        name: "experiences",
        path: "src/content/experiences",
        format: "json",
        fields: [
          {
            label: "Role",
            name: "role",
            type: "string",
          },
          {
            label: "Company",
            name: "company",
            type: "string",
          },
          {
            type: "object",
            name: "image",
            label: "Image",
            description: "The image used as the cover for the post",
            fields: [
              {
                type: "image",
                name: "url",
                label: "URL",
                description: "The URL of the image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                description: "The alt text of the image",
              },
            ],
          },
          {
            label: "Start Date",
            name: "startDate",
            type: "datetime",
          },
          {
            label: "End Date",
            name: "endDate",
            type: "datetime",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
            list: true,
          },
          {
            label: "Skills",
            name: "skills",
            type: "string",
            list: true,
          },
        ],
      },
    ],
  },
});
