import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import appService from "../../AppServices/AppService";
import './Brands.scss'

export const Brands = () => {
    const [brands, setBrands] = useState([]);
    const getBrands = async () => {
        try {
            // henter liste med alle undergrupper i brands
            const respones = await appService.getList("brands");
            if (respones.data) {
                setBrands(respones.data.items)
            };
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getBrands();
    }, [])
    const handleSub = event => {
        //sætter active på den produktgruppe som der bliver klikket på
        //og åbner derfor en liste til nextElementSibling (undergruppe)
        event.currentTarget.classList.toggle('active');
        let subgroup = event.currentTarget.nextElementSibling;
        //sætter display block på nextElementSibling(undergruppe) hvis den er active
        //derfor vises undergrupper kun når der klikkes på brands
        if (subgroup.style.display === 'block') {
            subgroup.style.display = 'none';
        } else {
            subgroup.style.display = 'block';
        }
    }
    return (
        <ul className="brandWrapper">
            <li onClick={handleSub}>Brands</li>
            {/* nextElementSibling */}
            <li className="subgroup">
                {/* mapper over alle undergrupper i brands */}
                {brands && brands.map((brand) => (
                    <ol key={brand.id}>
                        {/* sender id med til BrandDetails */}
                        <Link to={`/brands/${brand.id}`}>{brand.title}</Link>
                    </ol>
                ))}
            </li>
        </ul>
    )
}
export const BrandDetails = () => {
    const { id } = useParams();
    const [brandDetails, setBrandDetails] = useState();
    useEffect(() => {
        const getBrandDetails = async () => {
            try {
                // henter data for hvert brands id
                //id kommer med fra Brands
                const respones = await appService.getDetails('brands', id);
                if (respones.data) {
                    setBrandDetails(respones.data.item);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getBrandDetails();
    }, [id]);
    return (
        brandDetails ? (
            <article className="brandsDetalis">
                <figure>
                    <img src={brandDetails.image_fullpath} alt={brandDetails.title} />
                    <figcaption>
                        <h2>{brandDetails.title}</h2>
                        <p>{brandDetails.description}</p>
                    </figcaption>
                </figure>
            </article>
        ) : (<>..loading</>)
    )
}