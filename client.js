import { createClient} from "@sanity/client";

const config = {
  projectId: "0veafsgl",
  dataset: "production",
  apiVersion: "2024-02-08",
  useCdn: false,
};

const client = createClient(config);

export default client;