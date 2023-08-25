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
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date Posted",
            required: true,
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
        path: "src/shared/data",
        ui: {
          allowedActions: {
            delete: false,
            create: false,
          },
        },
        match: {
          include: "projects",
        },
        format: "json",
        fields: [
          {
            label: "Projects",
            name: "projects",
            type: "object",
            list: true,
            indexed: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string",
              },
              {
                label: "Image",
                name: "image",
                type: "image",
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
        ],
      },
      {
        label: "Experiences",
        name: "experiences",
        path: "src/shared/data",
        ui: {
          allowedActions: {
            delete: false,
            create: false,
          },
        },
        match: {
          include: "experiences",
        },
        format: "json",
        fields: [
          {
            label: "Experiences",
            name: "experiences",
            type: "object",
            list: true,
            indexed: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return {
                  label: item?.company,
                };
              },
            },
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
    ],
  },
});
