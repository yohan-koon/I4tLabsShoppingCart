import { LoadingType } from "../../types";

export type Address = {
    address?: string;
    city?: string;
}

export type Company = {
    address?: Address;
    department?: string;
    name?: string;
    title?: string;
}

export type User = {
    id: number;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    image?: string;
    token?: string;
    birthDate?: string;
    phone?: string;
    address?: string;
    university?: string;
    company?: Company;
};

export type ISignInType = {
    data: User | null;
    loading: LoadingType;
    error: string;
}

export type ILoadExisitingUserType = {
    loading: LoadingType;
    error: string;
}

export type ISignInRequestPayload = {
    username: string;
    password: string;
}

export type IGetUserByIdType = {
    data: User | null;
    loading: LoadingType;
    error: string;
}

export type AuthStateType = {
    user: ISignInType;
    fullUser: IGetUserByIdType;
}

export const AUTH = "auth";
export type AUTH = typeof AUTH;

export const SIGN_IN = `${AUTH}/signInAction`;
export type SIGN_IN = typeof SIGN_IN;

export const LOAD_EXISTING_USER = `${AUTH}/loadExistingUserAction`;
export type LOAD_EXISTING_USER = typeof LOAD_EXISTING_USER;

export const SIGN_OUT = `${AUTH}/signOutAction`;
export type SIGN_OUT = typeof SIGN_OUT;

export const GET_USER_BY_ID = `${AUTH}/getUserByIdAction`;
export type GET_USER_BY_ID = typeof GET_USER_BY_ID;



