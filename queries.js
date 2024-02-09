import { groq } from "next-sanity";
import client from "./client";

export async function getContacts() {
  return client.fetch(
    groq`*[_type == "contacts"]`
  );
}

