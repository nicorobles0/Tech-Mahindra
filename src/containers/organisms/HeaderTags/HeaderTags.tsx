import Head from 'next/head';
import { HeaderTypes } from './types/Header.types';


 const HeaderTagsOrganism = ( props : HeaderTypes ) => {
  return (
    <Head>
        <title> { props.title } </title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}


export default HeaderTagsOrganism;