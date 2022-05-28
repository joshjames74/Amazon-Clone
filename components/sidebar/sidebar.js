import { React, useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import CheckboxFilter from './checkboxFilter.js';
import MinMaxFilter from './minMaxFilter.js';
import { getCategories } from '../../utils/siteData.js';

export default function Sidebar() {

    // const [selectedCategories, setSelectedCategories] = useState();
    // Having issues with checkBoxFilter so not currently including

    return (
        <VStack w='20vh'>
            {/* <CheckboxFilter stateChanger={setSelectedCategories}>
            </CheckboxFilter> */}
            <MinMaxFilter></MinMaxFilter>
        </VStack>
    )
}