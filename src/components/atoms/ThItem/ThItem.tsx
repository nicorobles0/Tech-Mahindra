
import { TableTh } from './ThItem.style'

type ThItemType = {
    width?: string;
    title?: string;
}

export const ThItem = ( props: ThItemType  ) => {
  return (
    <TableTh width={props?.width}> { props?.title }</TableTh>
  )
}
