import theme from '../themes/default.js';
import { ChakraProvider } from '@chakra-ui/provider';
import { HStack } from '@chakra-ui/react';

import ProductCard from '../components/product/productCard.js';
import NavigationBar from '../components/navigationBar/navigationBar.js';
import * as product_data from '../samples/productCard.json';

import { getCurrentUserData } from '../utils/user.js';
import { getCategories } from '../utils/siteData.js';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {

  return (
    <ChakraProvider initialColorMode={theme.config.initialColorMode}>
      <NavigationBar>
      </NavigationBar>
      <HStack>
        <ProductCard productData={product_data}>
        </ProductCard>
      </HStack>
    </ChakraProvider>
  )
}
