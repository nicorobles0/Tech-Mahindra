import HeaderTagsOrganism from "@/containers/organisms/HeaderTags/HeaderTags";
import DashboardLayout from "@/containers/templates/DashboardLayout/DashboardLayout";

export default function Home() {
  return (
    <>
      <HeaderTagsOrganism
        title="Inicio | Tech Mahindra: Frontend Test"
        description="Inicio Prueba desarrollo Frontend Tech Mahindra"
      />
        <DashboardLayout />
   </>
  );
}
