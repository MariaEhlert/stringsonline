import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../AppServices/AppService";
import './ProductList.scss'

export const ProductList = () => {
    const { id } = useParams();
    const [productList, setProductList] = useState();
    useEffect(() => {
        //henter produkt grupper ved hjælp af appService
        const getProductList = async () => {
            try {
                // bruger id til at få fat i et bestem gruppe id
                //får id fra SideNav.jsx
                const respones = await appService.getDetails("productgroups", id);
                if (respones.data) {
                    setProductList(respones.data)
                };
            } catch (error) {
                console.log(error);
            }
        };
        getProductList();
    }, [id]);

    return productList ? (
        <article className="productListWrapper">
            {/* mapper igennem grupper og produkter  for at få alle produkter ud*/}
            {productList.group.products && productList.group.products.map((item) => (
                <figure key={item.id}>
                    <div className="imageWrapper">
                        <img src={item.image_fullpath} alt={item.id} />
                    </div>
                    <div className="descriptionWrapper">
                        <figcaption className="descriptionText">
                            <h3>{item.name}</h3>
                            {/* <p>{item.description_short} <Link to={item.id}>Læs mere</Link></p> */}
                            {/* virker ikke  */}
                            <p>{item.description_short} <Link to=''>Læs mere</Link></p>
                        </figcaption>
                        <figcaption className="cartWrapper">
                            <p>Pris: DDK {item.price}</p>
                            <Link to=''><button>Læg i kurv</button></Link>
                            <p>{item.stock} på lager</p>
                        </figcaption>
                    </div>

                </figure>
            ))}
        </article>
    ) : (
        <>...Loading</>
    );
}