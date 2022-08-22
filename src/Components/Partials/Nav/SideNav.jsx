import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import appService from "../../../AppServices/AppService"
import './SideNav.scss'

export const SideNav = () => {
    const [productGroups, setProductGroups] = useState([]);
    const getGroups = async () => {
        try {
            const respones = await appService.getList('productgroups');
            if (respones.data) {
                setProductGroups(respones.data.items)
            };
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getGroups();
    }, [])
    return (
        <nav className="sideNav">
            <ul>
                {productGroups && productGroups.map((groups) => (
                    <li key={groups.id}>
                        <Link to={groups.id}>{groups.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}