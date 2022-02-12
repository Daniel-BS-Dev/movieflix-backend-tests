import axios, { AxiosRequestConfig } from "axios";
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import history from './history';
import qs from "qs";


export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? "https://db-movieflix.herokuapp.com";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "movie";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "movie123";

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userId: number;
  username: string;
};

type LoginData = {
  username: string;
  password: string;
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;
  return axios({ ...config, baseURL: BASE_URL, headers });
};


export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

export const getAuthData = () => {
  const str = localStorage.getItem("authData") ?? "{}";
  return JSON.parse(str) as LoginResponse;
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem("authData", JSON.stringify(obj));
};

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token);
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();

  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};


export const removeToken = () => {
  return localStorage.removeItem("authData");
};


axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 404) {
     toast.error('Email Não existe. Verifique os dados e tente novamente')
    }

    if (error.response.status === 422) {
      toast.error('Senha são diferentes')
    }

    if (error.response.status === 401) {
      history.push('/login');
      document.location.reload();
    }

    return Promise.reject(error);
  }
);

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export const hasAnyRoles = (role: Role[]): boolean => {
  if (role.length === 0) {
    return true;
  }

  const tokenData = getTokenData();

  if (tokenData !== undefined) {
    return role.some((roles) => tokenData.authorities.includes(roles));
  }

  return false;
};