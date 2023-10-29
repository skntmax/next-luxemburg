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




export const getCategoryWiseProducts = (_id , cat_type) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/get-cate-wise-products?_id=${_id}&cat_type=${cat_type}`;
    return axios.get(url).then((res) => {
        if (res.data.status) {
            return res.data;
        }else{
             return res.data
        }
    })
};




export const getProductByOnlyId = (model) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/get-product-by-only-id`;
    return axios.post(url, model ,
        { headers:{
        "Content-Type": 'application/json' } }
        ).then((res) => {
        if (res.data.status) {
            return res.data;
        }else{
             return res.data
        }
    })
};
