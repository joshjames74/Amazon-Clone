import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'
import ProfilePage from '../components/profile/profilePage.js';

export default function Profile() {

    const router = useRouter();

    const { user, error, isLoading } = useUser();

    if (isLoading) {return <div>Loading...</div>}
    // Redirect if error
    if (error) {router.back();}

    if (!isLoading && !error) {
        if (!user) {
            // Redirect
            router.back()
        } else {
            return (
                <ProfilePage></ProfilePage>
            )
        }
    }
    
}