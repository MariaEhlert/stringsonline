import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../AppServices/AppService";

export const ProductDetails = () => {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        const getProductDetails = async () => {
            const respones = await appService.getDetails('productgroups', id);
            if (respones.data) {
                // setProductList(respones.data.productgroups.item);
                console.log(123);
            }

        }
        getProductDetails();
    }, [id]);
    return(
        <>
        </>
    )
}
