import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/provider';

import ProductCard from '../components/productCard/productCard.js';
import * as product_data from '../samples/productCard.json';

export default function Home() {

  return (
    <ChakraProvider>
      <ProductCard props={product_data}></ProductCard>
    </ChakraProvider>
  )
}
