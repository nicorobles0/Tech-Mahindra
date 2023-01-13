import { Button, Icon } from "./IconButton.style";

type IconButtonType = {
  img?: string;
  name?: string;
  onClick?: Function;
  isAnimated?: boolean;
  isRounded?: boolean;
};
const IconButton = (props: IconButtonType) => {
  return (
    <Button
      isAnimated={props?.isAnimated || false}
      title={props?.name}
      isRounded={props?.isRounded || false}
    >
      <Icon src={props?.img} alt={props?.name} />
    </Button>
  );
};
export default IconButton;
