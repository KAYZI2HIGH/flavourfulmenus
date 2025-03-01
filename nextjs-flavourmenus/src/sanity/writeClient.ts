import { createClient } from "@sanity/client";

const writeClient = createClient({
  projectId: "wrgfi95z",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export async function submitCheckout(data: {
  name: string;
  email: string;
  address: string;
  phone: string;
  orderItems: { _type: string, _ref: string, _key: string}[];
  totalPrice: number;
}) {
  try {
    const response = await writeClient.create({
      _type: "order",
      ...data,
    });

    return response;
  } catch (error) {
    console.error("Checkout submission error:", error);
    throw new Error("Failed to submit checkout details.");
  }
}
