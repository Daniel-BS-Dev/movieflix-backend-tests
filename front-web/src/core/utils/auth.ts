export const  CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userId: number;
    username: string
}

export const saveSessionData = (loginResponse : LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));

}