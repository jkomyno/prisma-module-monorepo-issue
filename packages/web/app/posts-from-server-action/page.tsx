import styles from "../page.module.css";
import { getPosts } from "./getPosts";


export default async function Home() {

  const { posts } = await getPosts()

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {posts.map((post, i) => {
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

    </div>
  );
}
