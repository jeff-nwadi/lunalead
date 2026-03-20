import { defineType, defineField, defineArrayMember } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "problem",
      title: "The Problem",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "solution",
      title: "The Solution",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caseStudyLink",
      title: "Case Study Link",
      type: "url",
    }),
  ],
});
