import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";
import appService from "../../AppServices/AppService";

export const Brands = () => {
    const [brands, setBrands] = useState([]);
    const getBrands = async () => {
        try{
            const respones = await appService.getList("brands");
            if(respones.data){
                setBrands(respones.data.items)
            };
        }catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getBrands();
    }, [])
    return(
        <>
        {brands && brands.map((brand) => (
            <li key={brand.id}>
            <Link to={brand.id}>{brand.title}</Link>
        </li>
        ))}
        <Outlet/>
        </>
    )
}
export const BrandDetails = () => {
    const {id} = useParams();
    const [brandDetails, setBrandDetails] = useState();
    useEffect(() => {
        const getBrandDetails = async () => {
            try{
                const respones = await appService.getDetails('brands', id);
                if(respones.data) {
                    setBrandDetails(respones.data.item);
                }
            }catch(error){
                console.log(error);
            }
        }
        getBrandDetails();
    }, [id]);
    return(
        brandDetails ? (
        <article>
            <figure>
                <figcaption>
                    <img src={brandDetails.image_fullpath} alt={brandDetails.title} />
                </figcaption>
                <h2>{brandDetails.title}</h2>
                <p>{brandDetails.description}</p>
            </figure>
        </article>
        ) : (<>..loading</>)
    )
}