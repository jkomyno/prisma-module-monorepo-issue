"use server";

import { db, Prisma } from "db";
import { POST_TYPE } from "db/enums"

export async function getPosts() {
  const posts = await db.post.findMany()

  console.log("POST_TYPE", POST_TYPE)
  console.log("Prisma.skip", Prisma.skip)

  return { posts };
}
