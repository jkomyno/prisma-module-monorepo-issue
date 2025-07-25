"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./getPosts";
import { notFound } from "next/navigation";

export const PostList = () => {

  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: () => getPosts(),
  });

  if (!data) {
    notFound()
  }

  return <main>
    {data.posts.map((post, i) => {
      return <div key={`post_${i}`}>
        <div>
          {post.title}
        </div>
        <div>
          {post.content}
        </div>
      </div>
    })}
  </main>
}