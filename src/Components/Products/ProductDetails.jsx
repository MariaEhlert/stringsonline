import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../AppServices/AppService";

export const ProductDetails = () => {
    // const {id} = useParams();
    // const [productDetails, setProductDetails] = useState([]);
    // useEffect(() => {
    //     const getProductDetails = async () => {
    //         const respones = await appService.getDetails('products', id);
    //         if (respones.data) {
    //             setProductDetails(respones.data.item);
    //         }

    //     }
    //     getProductDetails();
    // }, [id]);
    return(
        <>
        <p>Product Details</p>
        </>
    )
}
