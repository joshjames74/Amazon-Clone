import { React, Component } from 'react';
import { HStack, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Button, Menu, MenuButton, MenuList, MenuItem, FormControl, Select } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { fetchData } from '../../utils/siteData.js';
import AccountButton from './AccountButton.js';

const logoAddress = 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: ['loading'],
            isNewUser: props.isNewUser
        }
    }

    componentDidMount() {
        fetchData('categories', 
            data => data.then(
                v => this.setState({categories: v.message[0].categories})
            )
        )
    }

    setCategories() {
        return this.state.categories.map((v, i) => 
            (
                <option key={i}>{v}</option>
            )
        )
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        }
    }

    render() {
        return (
            <>
            {/* Navigation Bar */}
            <HStack h='10vh' w='100vw'>
                {/* Logo */}
                <Image w='15vw' maxW='20vh' src={logoAddress}/>
                {/* Search Bar */}
                <InputGroup w='50vw' m='0'>
                    <InputLeftAddon w='20vw'>
                        <FormControl>
                            <Select
                            id='category'
                            placeholder='All'>
                                {this.setCategories()}
                            </Select>
                        </FormControl>
                    </InputLeftAddon>
                    <Input placeholder='Search'></Input>
                    <InputRightAddon
                    as={Button}
                    children={
                    <Search2Icon></Search2Icon>}/>
                </InputGroup>
                {/* Account Button */}
                <AccountButton user_object={this.props.user_object}></AccountButton>
            </HStack>
            </>
        )
    }
}