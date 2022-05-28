// import Session from './session.js';
import { useUser } from '@auth0/nextjs-auth0';

const _base_url = 'http://localhost:3000';

export async function getCurrentUserData(callback) {

    // Fetch user data
    const { user } = useUser();

    // Check that user exists
    if (!user)  { 
        callback({
            message: 'No user logged in',
            success: false,
        }); return 
    }

    // Check that sub property exists
    if (!user.sub) {
        callback({
            message: 'No sub property found',
            success: false
        }); return
    }

    // Get user data
    const _route = '/api/users?sub=';
    const request = {
        method: 'GET',
        cache: 'force-cache'
    }
    
    fetch(_base_url + _route + user.sub, request)
        .then(response => response.json())
        .then(data => {

            if (data.success) {
                callback({
                    message: data.message,
                    success: true
                })
            }

            else {
                callback({
                    message: false,
                    success: false,
                })
            }
        })
        .catch(error => console.log(error))
}