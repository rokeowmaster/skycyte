import { defineField } from "sanity";

const about = {
  name: "about",
  title: "about",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
        name: "companyLogo",
        title: "Company Logo",
        type: "image",
        description: "Upload logo",
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
        name: "companyDescription",
        title: "Company Description",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
      }),
    defineField({
        name: "specialtyServices",
        title: "Specialty Services",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
    defineField({
        name: "productRange",
        title: "Product Range",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(500),
    }),
    {
        name: "productSummary",
        title: "Product Summary",
        type: "object",
        description: "Add your product summary:",
        fields: [
          {
            name: "diagnositicEquipment",
            title: "Diagnosic Equipment",
            type: "string",
            validation: (Rule) => Rule.required().min(40).max(500),
          },
          {
            name: "consumableSupplies",
            title: "Consumable Supplies",
            type: "string",
            validation: (Rule) => Rule.required().min(40).max(500),
          },
          {
            name: "nursingEquipment",
            title: "Nursing Equipment",
            type: "string",
            validation: (Rule) => Rule.required().min(40).max(500),
          },
          {
            name: "medicalFurniture",
            title: "Medical Furniture",
            type: "string",
            validation: (Rule) => Rule.required().min(40).max(500),
          },
        ],
        options: {
          collapsed: false,
          collapsible: true,
          columns: 2,
        },
      },

]
};

export default about;