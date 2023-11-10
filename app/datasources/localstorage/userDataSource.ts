import { User } from "../../redux/auth";
import { clear, load, remove, save } from "../../utils/storage";

export const saveUser = async (user: User): Promise<boolean> => {
    return await save('USER', user)
}

export const getUser = async () : Promise<User | null> => {
    const response = await load('USER');
    return response as User;
}

export const clearUser = async () => {
    return await clear();
}