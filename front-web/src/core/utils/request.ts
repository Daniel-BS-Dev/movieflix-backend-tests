import axios, {Method} from 'axios';
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from './auth';
import qs from 'qs';

type RequestParams = {
   url: string;
   data?: object | string;
   params?: object;
   headers?: object;
   method?: Method;
}

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = 'http://localhost:3000';

export const makeRequest = ({method='GET', url, data, params, headers}: RequestParams) => {
    return axios({
      method,
      url: `${BASE_URL}${url}`,
      data,
      params,
      headers
    });
}
export const makePrivateRequest = ({method='GET', url, data, params}: RequestParams) => {
   const saveSessionData = getSessionData();

   const headers = {
    'Authorization' : `Bearer ${saveSessionData.access_token}`
  }

  return makeRequest({method, url, data, headers});

}

export const makeLogin = (loginData:LoginData) =>{
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
      Authorization : `Basic ${window.btoa(token)}`,
      'Content-Type' : 'application/x-www-form-urlencoded'
    }

    const playload = qs.stringify({...loginData, grant_type:'password'});

    return makeRequest({url:'/oauth/token', data:playload, method:'POST', headers})
}