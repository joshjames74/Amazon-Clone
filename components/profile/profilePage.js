import NavigationBar from '../navigationBar/navigationBar.js';
import ProfileCard from './ProfileCard.js';
import { SimpleGrid, VStack, Center, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/provider';

export default function ProfilePage() {
    const card_props = [
        {
            image_url: 'https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/order._CB660692193_.png',
            title: 'Your Orders',
            content: 'Track, return, or buy things again',
            url: '/'
        },
        {
            image_url: 'https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/security._CB657827121_.png',
            title: 'Login & Security',
            content: 'Edit login, name, and mobile number',
            url: '/'
        },
        {
            image_url: 'https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657827121_.png',
            title: 'Your Addresses',
            content: 'Edit addresses and delivery preferences for orders and gifts',
            url: '/'
        },
        {
            image_url: 'https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/payment._CB660692193_.png',
            title: 'Your payments',
            content: 'Manage payment methods and settings, view all transactions'
        }
    ]

    return (
        <ChakraProvider>
            <NavigationBar></NavigationBar>
            <VStack w='110vh' marginX='2vh' spacing='0' justify='center'>
                <Text w='100%' padding='3vh' align='left' fontWeight='semibold' fontSize='xl'>
                    Your Account
                </Text>
                <SimpleGrid columns={2} spacing='3vh'>
                {card_props.map((v, i) => 
                    <ProfileCard props={v}></ProfileCard>
                )}
                </SimpleGrid>
            </VStack>         
        </ChakraProvider>
    )
}