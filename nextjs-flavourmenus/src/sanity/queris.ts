import { client, urlFor } from "./client";

export interface MenuItem {
  _id: string,
  category: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  code?: string;
  tag?: string;
  image: string;
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const query = `*[_type == "menuItem"]{
  _id,
    category,
    name,
    description,
    price,
    originalPrice,
    discount,
    code,
    tag,
    "image": image.asset->url
  } | order(category asc)`;

  const items = await client.fetch<MenuItem[]>(query);

  return items.map((item) => ({
    ...item,
    image: urlFor(item.image).url(),
  }));
}