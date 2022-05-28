import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors = {
    brand: {
        blue: "#3443eb"
    }
}

const theme = extendTheme({ config })
export default theme;