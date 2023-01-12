import HeaderTagsOrganism from "@/containers/organisms/HeaderTags/HeaderTags.organism";
import { LoginTemplate } from "@/containers/templates/Login/Login.template";

import styles from "../styles/general.module.css";

export default function Home() {
  return (
    <>
      <HeaderTagsOrganism
        title="Login | Tech Mahindra: Frontend Test"
        description="Login Prueba desarrollo Frontend Tech Mahindra"
      />
      <main className={styles.main}>
          <LoginTemplate/>
      </main>
    </>
  );
}
