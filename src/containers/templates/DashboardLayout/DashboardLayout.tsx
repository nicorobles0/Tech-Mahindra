import { Dahsboard } from "@/containers/organisms/Dashboard/Dahsboard";
import LateralMenu from "@/containers/organisms/LateralMenu/LateralMenu";
import {
  MenuContainer,
  AdminSection,
  ContentContainer,
} from "./DashboardLayout.style";

const DashboardLayout = () => {
  return (
    <AdminSection>
      <MenuContainer>
        <LateralMenu />
      </MenuContainer>
      <ContentContainer>
        <Dahsboard />
      </ContentContainer>
    </AdminSection>
  );
};
export default DashboardLayout;
