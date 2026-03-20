import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectSchema } from "./sanity/schemas/project";

export default defineConfig({
  name: "lunalead-studio",
  title: "Lunalead Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [projectSchema],
  },
});
