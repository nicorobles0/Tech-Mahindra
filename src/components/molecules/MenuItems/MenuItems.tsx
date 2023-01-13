import { ItemMenu } from "@/components/atoms/ItemMenu/ItemMenu";
import { useRouter } from "next/router";
import { MenuLi, MenuNav } from "./MenuItems.style";
import { ItemMenuType } from "./types/MenuItems.types";

const MenuItems = () => {
  const router = useRouter();
  const menuItems: ItemMenuType[] = require("./mocks/MenuItems.json");
  return (
    <MenuNav>
      {menuItems.map((item: ItemMenuType, index: number) => {
        const isActive: boolean = item?.url === router.asPath ? true : false;
        return (
          <MenuLi isActive={isActive} key={`MenuLi~${index}`}>
            <ItemMenu url={item?.url} text={item?.text} />
          </MenuLi>
        );
      })}
    </MenuNav>
  );
};
export default MenuItems;
