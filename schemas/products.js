import { defineField } from "sanity";

const products = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
        name: "productThumb",
        title: "Product Thumb",
        type: "image",
        description: "Upload product thumb",
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
        name: "productName",
        title: "Product Name",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
      }),
    defineField({
        name: "productDescription",
        title: "Product Description",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
    }),
    defineField({
        name: "productPrice",
        title: "Product Price",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
    }),
]
};

export default products;