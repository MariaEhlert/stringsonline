import { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom";
import appService from "../../../AppServices/AppService"
import './SideNav.scss'

export const SideNav = () => {
    const { id } = useParams();
    const [groups, setGroups] = useState([]);
    const getGroups = async () => {
        try {
            const respones = await appService.getList('');
            if (respones.data) {
                setGroups(respones.data.productgroups.items)
            };
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getGroups();
    }, [])

    const handleSub = event => {
        event.currentTarget.classList.toggle('active');
        let subgroup = event.currentTarget.nextElementSibling;
        if (subgroup.style.display === 'block') {
            subgroup.style.display = 'none';
        } else {
            subgroup.style.display = 'block';
        }
    }
    return (
        <nav className="sideNav">
            <ul>
                {groups && groups.map((group) => {
                    return (
                        <ul key={group.id}>
                            <li onClick={handleSub}>
                                {group.title}
                            </li>
                            <li className="subgroup">
                                {group && group.subgroups.map((productList) => {
                                    return (
                                        <ol key={productList.id}>
                                            <NavLink to={`/product/${productList.id}`}>{productList.title}</NavLink>
                                        </ol>
                                    )
                                })}
                            </li>
                        </ul>
                    )
                })}
                <Link to='/brands'>Brands</Link>
            </ul>
        </nav>
    )
}





