
import { TableTd } from './TdItem.style'

type TdItemType = {
    text?: string;
}

const TdItem = ( props: TdItemType  ) => {
  return (
    <TableTd > { props?.text }</TableTd>
  )
}

export default TdItem;
