import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import appService from "../../../AppServices/AppService";
export const Home = () => {
    return (
        <>
            <Hero />
            <ProductList />
        </>
    )
}
const Hero = () => {
    const { id } = useParams();
    const [hero, setHero] = useState({});
}
export const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const respones = await appService.getList('productgroups');
            if (respones.data) {
                setProducts(respones.data.items);
            }
        }
        getProducts();
    }, []);
    return (
        <>
            <h2>Kundernes faroritter</h2>
            {products && products.map((product) => {
                return(
                    <div key={product.id}>
                        {product && product.subgroups.map((group, i) => (
                            <p key={group.id}>
                                <Link to={`/product/${group.id}`}>{group.title}</Link>
                            </p>
                        ))}
                    </div>
                )
            })}
        </>
    )
}
