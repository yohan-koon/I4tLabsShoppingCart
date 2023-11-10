import axiosInstance from "../../config/axios.config"
import { ISignInRequestPayload, User } from "../../redux/auth";

export const signIn = async (payload: ISignInRequestPayload): Promise<User> => {
    const response = await axiosInstance.post('/auth/login', payload)
    return response.data;
}