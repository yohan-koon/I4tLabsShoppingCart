import axiosInstance from "../../config/axios.config";
import { Product, ProductsPaginatedResponse } from "../../redux/products/types";
import { PaginationConfig } from "../../types";

export const getProducts = async (data: PaginationConfig): Promise<ProductsPaginatedResponse> => {
    const {limit, skip} = data;
    const response = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`)
    return response.data;
}

export const getProductByProductId = async (id: number) => {
    const response = await axiosInstance.get(`/products/${id}`)
    return response.data;
}