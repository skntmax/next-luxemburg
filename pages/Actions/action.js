import axios from "axios";
import CONSTANT from "constant";

export const getMarkerCategory = (data) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/get-all-marker-category`;
    return axios.get(url, data).then((res) => {
        if (res.data.status) {
            return res.data;
        }else{
             return res.data
        }
    })
};



export const allProductsCategory = (data) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/get-all-products-category`;
    return axios.get(url, data).then((res) => {
        if (res.data.status) {
            return res.data;
        }else{
             return res.data
        }
    })
};
