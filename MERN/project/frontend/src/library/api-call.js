import { axiosInstance } from "./helper";

const getCategories = async (id = null) => {
    try {
        let API = "category"
        if (id != null) API += `/${id}`
        const response = await axiosInstance.get(API);
        if (response.data.success) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        return null
        console.log(error)
    }
}

const getProducts = async (id = null, categorySlug = null, brandSlug = null, colorSlug = null) => {
    try {
        let API = "product"
        if (id != null) API += `/${id}`
        const query = new URLSearchParams();
        if (categorySlug) query.append("categorySlug", categorySlug);
        if (brandSlug) query.append("brandSlug", brandSlug);
        if (colorSlug) query.append("colorSlug", colorSlug);
        const response = await axiosInstance.get(`${API}?${query.toString()}`);
        if (response.data.success) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        return null
        console.log(error)
    }
}


const getBrands = async (id = null) => {
    try {
        let API = "brand"
        if (id != null) API += `/${id}`
        const response = await axiosInstance.get(API);
        if (response.data.success) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        return null
        console.log(error)
    }
}

const getColors = async (id = null) => {
    try {
        let API = "color"
        if (id != null) API += `/${id}`
        const response = await axiosInstance.get(API);
        if (response.data.success) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
        return null

    }
}

export { getCategories, getColors, getBrands, getProducts }