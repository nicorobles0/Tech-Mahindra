import { WithPrivateRoute } from "src/core/guards/validateSessionContext";
import styles from "../styles/general.module.css";

export default function Home() {
  return (
      <WithPrivateRoute>
        <main className={styles.main}></main>
      </WithPrivateRoute>
  );
}
