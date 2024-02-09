import { defineField } from "sanity";

const testimonials = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
        name: "firstTestimonialPic",
        title: "First Testimonial Pic",
        type: "image",
        description: "Upload testimonial pic",
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
        name: "testName",
        title: "Test Name",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
      }),
    defineField({
        name: "testBody",
        title: "Test Body",
        type: "string",
        validation: (Rule) => Rule.required().min(40).max(50),
    }),
    
]
};

export default testimonials;