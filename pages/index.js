import Head from 'next/head'
import Image from 'next/image'
import theme from '../themes/default.js';
import styles from '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/provider';

import ProductCard from '../components/productCard/productCard.js';
import NavigationBar from '../components/navigationBar/navigationBar.js';
import * as product_data from '../samples/productCard.json';

export default function Home() {

  return (
    <ChakraProvider initialColorMode={theme.config.initialColorMode}>
      <NavigationBar></NavigationBar>
      <ProductCard props={product_data}></ProductCard>
    </ChakraProvider>
  )
}
