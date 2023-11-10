import axiosInstance from "../../config/axios.config"
import { ISignInRequestPayload, User } from "../../redux/auth";

/**
 * Sign in user
 * @param payload { username: string, password: string}
 * @returns User
 */
export const signIn = async (payload: ISignInRequestPayload): Promise<User> => {
    const response = await axiosInstance.post('/auth/login', payload)
    return response.data;
}

/**
 * Get user by id
 */
export const getUserById = async (id: number): Promise<User> => {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
}