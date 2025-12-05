// tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/post",
        format: "md,
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description" },
          { type: "datetime", name: "publishDate", label: "Publish Date", required: true },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { value: "news", label: "NEWS" },
              { value: "samsung", label: "SAMSUNG" },
              { value: "apple", label: "APPLE" },
              { value: "ai", label: "AI" },
              { value: "android", label: "ANDROID" },
              { value: "games", label: "GAMES" },
              { value: "opinions", label: "OPINIONS" },
            ],
          },
          { type: "image", name: "coverImage", label: "Cover Image (optional)" },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
        ],
      },
    ],
  },
});
