import { defineField } from "sanity";

const services = {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
        name: "serviceBanner",
        title: "Service Banner",
        type: "image",
        description: "Upload services banner",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
    defineField({
        name: "introduction",
        title: "Introduction",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
      }),
    defineField({
        name: "safety",
        title: "Safety",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
    defineField({
        name: "community",
        title: "Community",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
    defineField({
        name: "sustainability",
        title: "Sustainability",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
    defineField({
        name: "bestQuality",
        title: "Best Quality",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
    defineField({
        name: "strategy",
        title: "Strategy",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
]
};

export default services;