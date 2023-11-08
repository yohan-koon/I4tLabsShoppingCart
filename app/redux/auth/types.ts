import { LoadingType } from "../../types";

export type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
};

export type ISignInType = {
    user: User | null;
    loading: LoadingType;
    error: string;
}

export type ISignInRequestType = {
    username: string;
    password: string;
}

export type AuthStateType = {
    signIn: ISignInType;
}

export const AUTH = "auth";
export type AUTH = typeof AUTH;

export const SIGN_IN = `${AUTH}/sign-in`;
export type SIGN_IN = typeof SIGN_IN;



