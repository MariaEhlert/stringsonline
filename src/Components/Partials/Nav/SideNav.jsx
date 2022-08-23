import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import appService from "../../../AppServices/AppService"
import './SideNav.scss'

export const SideNav = () => {
    const [groups, setGroups] = useState([]);
    const getGroups = async () => {
        try {
            const respones = await appService.getList('productgroups');
            if (respones.data) {
                setGroups(respones.data.items)
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
                {groups && groups.map((group) => {
                    return (
                        <div key={group.id}>
                            <li key={group.id}>
                                <Link to={group.id}>{group.title}</Link>
                            </li>
                            {group && group.subgroups.map((item) => {
                                return(
                                    <li key={item.id}>
                                        <Link to=''>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </div>
                    )
                })}
                <Link to='/brands'>Brands</Link>
            </ul>
        </nav>
    )


}
