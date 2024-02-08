import { defineField } from "sanity";

const contacts = {
  name: "contacts",
  title: "contacts",
  type: "document",
  fields: [
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "Email Address",
      validation: (Rule) => Rule.required().min(40).max(50),
    }),
    defineField({
        name: "instagram",
        title: "Instagram",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
      }),
    defineField({
        name: "facebook",
        title: "Facebook",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
    }),
    defineField({
        name: "address",
        title: "Address",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
    }),
]
};

export default contacts;