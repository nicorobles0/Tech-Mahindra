import IconButton from "@/components/atoms/iconButton/IconButton";
import {
  DashboardHeadDiv,
  DashboardTitle,
  DashboardIconContainer,
} from "./DashboardHead.style";
import { IconButtonType } from "./types/dashboardButton.types";

const DashboardHead = () => {
  const buttonsList: IconButtonType[] = require("./mocks/ButtonsList.json");
  return (
    <DashboardHeadDiv>
      <DashboardTitle>Listado de compras...</DashboardTitle>
      <DashboardIconContainer>
        {buttonsList.map((item: IconButtonType, index: number) => {
          return (
            <IconButton
              key={`ButtonItem~${index}`}
              img={item?.img}
              name={item?.name}
              isAnimated={item?.isAnimated}
            />
          );
        })}
      </DashboardIconContainer>
    </DashboardHeadDiv>
  );
};
export default DashboardHead;
