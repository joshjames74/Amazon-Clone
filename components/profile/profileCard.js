import { Image, Box, a, Link, Center, VStack, Heading, Text, Flex} from '@chakra-ui/react';

export default function ProfileCard(props) {

    var props = props.props

    return (
        <Box as={Link} href={props.url} h='15vh' w='50vh'
        borderColor='black' borderWidth='2px' borderRadius='5px'
        paddingX='3px'>
            <Flex align='center' direction='row' h='100%' w='100%'>
                <Center w='30%' h='100%'>
                    <Image
                    src={props.image_url}
                    h='80%'>
                    </Image>
                </Center>
                <VStack w='70%' align='left' spacing='2vh'>
                    <Text align='left' fontSize='m' h='30%'>
                        {props.title}
                    </Text>
                    <Text align='left' fontSize='xs' h='70%'
                    color='grey.300'>
                        {props.content}
                    </Text>
                </VStack>
            </Flex>
        </Box>
    )
}