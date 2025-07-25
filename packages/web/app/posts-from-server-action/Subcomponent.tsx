import styles from "../page.module.css";
import { getPosts } from "./getPosts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PostList } from "./PostList";

export async function Subcomponent() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post"],
    queryFn: () => getPosts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.page}>
        <PostList />
      </div>
    </HydrationBoundary>
  );
}
