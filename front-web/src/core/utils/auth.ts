import jwtDecode from "jwt-decode";

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

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
   exp: number;
   user_name: string;
   authorities: Role[];
   
}

export const saveSessionData = (loginResponse : LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));

}

export const getSessionData = () => {
    const session = localStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(session);

    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();

    const tokenDecoded = jwtDecode(sessionData.access_token);
    return  tokenDecoded as AccessToken;
}

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    const { authorities } = getAccessTokenDecoded();

    return routeRoles.some(role => authorities.includes(role));
}