import axiosInstance from "../../config/axios.config";
import { GetProductRequestType, Product, ProductsPaginatedResponse } from "../../redux/products/types";

export const getProducts = async (data: GetProductRequestType): Promise<ProductsPaginatedResponse> => {
    const {limit, skip} = data;
    const response = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`)
    return response.data;
}

export const getProductById = async (id: string) => {

}