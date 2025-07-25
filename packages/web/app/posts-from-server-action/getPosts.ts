"use server";

import { db } from "db";

export async function getPosts() {
  const posts = await db.post.findMany()

  return { posts };
}
