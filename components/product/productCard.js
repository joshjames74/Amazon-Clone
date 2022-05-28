import { React, Component } from 'react';
import { Box, VStack, HStack, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default class ProductCard extends Component {

    constructor(props) {
        super(props);
    }

    getReviewStars(score) {
        return Array(5).fill('').map((_, i) => 
            <StarIcon key={i} color={i < score ? 'yellow.400' : 'gray.400'} />
        );
    }

    render() {
        return (
            <Box w='20vh' h='30vh' border='2px solid gray' borderRadius='lg' m='0' py='2'>
                <VStack h='100%' spacing='2px'>
                    <Image h='40%' 
                    src={this.props.productData[0].images[0].url}
                    alt={this.props.productData[0].images[0].alt}/>
                    <Box h='10%' fontSize='0.9rem' fontWeight='semibold' lineHeight='tight' textOverflow='ellipsis' whiteSpace='nowrap'>
                        <h4>{this.props.productData[0].name}</h4>
                    </Box>
                    <Box h='10%'>
                        <p>{this.props.productData[0].seller}</p>
                    </Box>
                    <Box h='10%' fontWeight='bold'>
                        <p className="product-card__price-content">{this.props.productData[0].price}</p>
                    </Box>
                    <Box h='10%'>
                    {this.getReviewStars(this.props.productData[0].review_stars)}
                    </Box>
                    <Box h='10%' fontSize='sm' pt='2px'>
                        ({this.props.productData[0].review_count} reviews)
                    </Box>
                </VStack>
            </Box>
        )
    }

}