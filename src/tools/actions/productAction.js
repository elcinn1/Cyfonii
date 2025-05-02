import { v4 as uuidv4 } from 'uuid';
import supabase from "../../utils/supabase";

export const getProduct = (products) => ({
    type: "GET_PRODUCT",
    products,
})

export const addProduct = async (product) => {
    const { data, error } = await supabase.from('cyfonii-product').insert(product);
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);

    }
}

export const deleteProduct = async (id) => {
    const { data, error } = await supabase
        .from("cyfonii-product")
        .delete()
        .eq("id", id);
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign("/dashboard");
    }
}
export const editProduct = async (id, product) => {
    const { data, error } = await supabase
        .from("cyfonii-product")
        .update(product)
        .eq("id", id);
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign("/dashboard");
    }
};
