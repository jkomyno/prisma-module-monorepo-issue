import styles from "../page.module.css";
import { Subcomponent } from "./Subcomponent";


export default async function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Subcomponent />
      </main>

    </div>
  );
}
