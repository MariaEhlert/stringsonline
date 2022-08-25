import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../../AppServices/AppService";
import './Home.scss'
export const Home = () => {
    return (
        <>
            <Hero /> <br></br>
            <HomeList />
        </>
    )
}
export const Hero = () => {
    //henter hero info igennem api ved hjælp af appService
    const [hero, setHero] = useState([]);
    useEffect(() => {
        const getHero = async () => {
            const respones = await appService.getList('');
            if (respones.data) {
                //henter anden gruppe (basser), første sub gruppe og første produkt 
                setHero(respones.data.productgroups.items[1].subgroups[0].products[0]);
            }

        }
        getHero();
    }, []);
    return (
        hero ? (
            <article className="heroWrapper">
                <figure>
                    <img src={hero.image_fullpath} alt={hero.title} />
                    <figcaption>
                        <p>{hero.brand}</p>
                        <h3>{hero.name}</h3>
                        <hr></hr>
                        <h3>Se den nye generation af Elbasser</h3>
                        <hr></hr>
                        <Link to=''><button>Læs mere</button></Link>
                    </figcaption>
                </figure>
            </article>
        ) : (<>Loading</>)
    )

}

export const HomeList = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const respones = await appService.getList('');
            if (respones.data) {
                setProductList(respones.data.productgroups.items[0].subgroups[0].products);
            }

        }
        getProducts();
    }, []);
    return (
        <>
            <h2>Kundernes favoritter</h2>
            <section className="productWrapper">
            {productList && productList.map((item) => {
                return (
                    <article  key={item.id}>
                        <figure>
                            <div className="imageWrapper">
                                <img src={item.image_fullpath} alt={item.id} />
                            </div>
                            <figcaption>
                                    <h3>{item.name}</h3>
                                    <p>{item.description_short}<Link to='/'>Læs mere</Link></p>
                                <div className="shopcartWrapper">
                                    <p>pris: DDK{item.price}</p>
                                    <Link to=''><button>Læg i kurv</button></Link>
                                </div>
                            </figcaption>
                        </figure>

                    </article>
                )
            })}
            </section>
        </>
    )
}
