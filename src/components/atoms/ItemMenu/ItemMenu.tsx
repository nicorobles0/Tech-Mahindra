import React from 'react'
import { ItemMenuLink } from './ItemMenu.style';

type ItemMenu = {
    text: string;
    url: string;
}

export const ItemMenu = ( props: ItemMenu  ) => {
  return (
    <ItemMenuLink href={props?.url}> { props?.text } </ItemMenuLink>
  )
}
