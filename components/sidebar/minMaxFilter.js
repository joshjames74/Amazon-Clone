import { React, useState } from 'react';
import { Box, Button, HStack, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function MinMaxFilter(props) {

    const [isHidden, setIsHidden] = useState(true);

    // NEED TO SANITIZE INPUT

    // Validate
    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        // Guard clause
        if (isNaN(value)) { return }
        // Set respective ranges
        if (name === 'min') {
            props.stateChanger(prevState => {
                return {...prevState, min: value}    
            })
        } if (name === 'max') {
            props.stateChanger(prevState => {
                return {...prevState, max: value}
            })
        }
    }

    // Set left addon if specified
    const setLeftAddon = () => {
        if (props.left_addon) {
            return ( 
            <InputLeftAddon>
                {props.left_addon}
            </InputLeftAddon>)
        }
    }

    return (
        <Box w='full' h='full'>
            <Button
            // Toggle isHidden property
            onClick={() => setIsHidden(!isHidden)} w='full'>
                {props.name} <ChevronDownIcon/>
            </Button>
            <HStack display={isHidden ? 'none' : 'block'} w='full' margin='0'>
                <InputGroup w='full' margin='0'>
                    {setLeftAddon()}
                    <Input
                    w='full'
                    name='min'
                    onChange={handleChange}
                    type={props.type}
                    placeholder='min'>
                    </Input>
                </InputGroup>
                <InputGroup w='full' margin='0'>
                    {setLeftAddon()}
                    <Input
                    w='full'
                    name='max'
                    onChange={handleChange}
                    type={props.type}
                    placeholder='max'
                    margin='0'></Input>
                </InputGroup>
            </HStack>
        </Box>
    )
}