"use server";

import { db } from "db";
import { POST_TYPE } from "db"

export async function getPosts() {
  const posts = await db.post.findMany()

  console.log("POST_TYPE", POST_TYPE)

  return { posts };
}
