import { groq } from "next-sanity";
import client from "./client";

export async function getContacts() {
  return client.fetch(
    groq`*[_type == "contacts"]`
  );
}
export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]`
  );
}
export async function getServices() {
  return client.fetch(
    groq`*[_type == "services"]`
  );
}
export async function getProducts() {
  return client.fetch(
    groq`*[_type == "products"]`
  );
}
export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimoials"]`
  );
}