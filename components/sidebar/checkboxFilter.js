import { useState } from 'react';
import { Box, Button, VStack, CheckBox, CheckBoxGroup } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { getCategories } from '../../utils/siteData.js';


export default function CheckboxFilter(props) {

    const [isHidden, setIsHidden] = useState(true);
    var categories = []

    // getCategories(res => {
    //     if (res.success) {
    //         categories = res.message
    //     }
    // })

    // console.log(categories)

    // Toggle existance of value in prevState
    const setArray = (prevState, value) => {
        if (prevState.includes(value)) {
            // Remove item from prevState
            return prevState.filter(v => v !== value)
        } else {
            // Append value to prevstate
            return [...prevState, value]
        }
    }

    // Update state with the given state changer
    const handleChange = (event) => {
        const value = event.target.value;
        props.stateChanger(prevState => setArray(prevState, value))
    }

    // Map the given list of items to checkbox items
    function setCheckBoxItems() {
        return categories.map((v, i) => (
            <CheckBox
            key={i} value={v} defaultIsChecked>
            </CheckBox>
        ))
    }

    return (
        <Box w='full'>
            <Button
            // Toggle isHidden property
            onClick={() => setIsHidden(!isHidden)}>
                <ChevronDownIcon/>
            </Button>
        </Box>
    )

}