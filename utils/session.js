export default class Session {
    constructor() {
        this._base_url = 'localhost:3000'
    }

    get currentUser() {
        return this.currentUser()
    }

    get isLoggedIn() {
        return this.isLoggedIn()
    }

    async currentUser() {
        const _route = '/api/auth/me';
        const res = fetch(this._base_url + _route)
        return res.then(res => res.json())
    }

    isLoggedIn() {
        if (this.currentUser.email) {
            return true
        } return false
    }  
}