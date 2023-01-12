import HeaderTagsOrganism from "@/containers/organisms/HeaderTags/HeaderTags.organism";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeaderTagsOrganism
        title="Login | Tech Mahindra: Frontend Test"
        description="Login Prueba desarrollo Frontend Tech Mahindra"
      />
      <main className={styles.main}></main>
    </>
  );
}
