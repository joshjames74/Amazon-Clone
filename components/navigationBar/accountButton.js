import { Button, Link, HStack, Image, a, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0';
import { getCurrentUserData } from '../../utils/user.js'

export default function AccountButton(props) {

    const { user, error, isLoading } = useUser();

    const logout_url = "http://localhost:3000/api/auth/logout";
    const login_url = "http://localhost:3000/api/auth/login";
    const profile_url = "http://localhost:3000/profile";

    if (isLoading) return <Button>Loading...</Button>
    if (error) return <Button>{error.message}</Button>

    var profile_picture_url;

    if (user) {

        return (
            <Menu>
                {/* Add log in check */}
                <MenuButton as={Button}>
                    <HStack height='100%'>
                        <p>Account</p>
                        <Image 
                        // temporarily not including as google blocks link
                        // to profile image after too many requests 
                        //src={user.picture}
                        src=''
                        borderRadius='full'
                        objectFit='scale-down'
                        height='5vw'>
                        </Image>
                    </HStack>
                </MenuButton>
                <MenuList>
                    <MenuItem as={Link} href={profile_url}>
                        My Amazon
                    </MenuItem>
                    <MenuItem>My Orders</MenuItem>
                    <MenuItem as={Link} href={logout_url}>
                        Log Out
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

    return <Button><a href={login_url}>Login</a></Button>
}